// ===== AI Chat with Web Search =====

// Grade level language settings
const gradeSettings = {
    primary: {
        label: "Primary (K-5)",
        maxSentences: 3,
        simplify: true,
        greeting: "Let me explain that in a simple way! 🌟",
        noResult: "Hmm, I couldn't find an answer for that. Can you try asking in a different way? 🤔"
    },
    middle: {
        label: "Middle (6-8)",
        maxSentences: 5,
        simplify: false,
        greeting: "Great question! Here's what I found: 📚",
        noResult: "I wasn't able to find a clear answer for that. Could you rephrase your question or try a different topic?"
    },
    high: {
        label: "High School (9-12)",
        maxSentences: 7,
        simplify: false,
        greeting: "Here's a detailed explanation based on my research: 📖",
        noResult: "I couldn't find specific information on that topic. Try rephrasing your question or narrowing the subject."
    }
};

// Search Wikipedia API for an answer
async function searchWeb(query) {
    try {
        // Step 1: Search for matching articles
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=3&format=json&origin=*`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if (!searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
            return null;
        }

        const topResult = searchData.query.search[0];
        const pageTitle = topResult.title;

        // Step 2: Get the extract (summary) of the top article
        const extractUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=extracts&exintro=true&explaintext=true&exsectionformat=plain&format=json&origin=*`;
        const extractRes = await fetch(extractUrl);
        const extractData = await extractRes.json();

        const pages = extractData.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId]?.extract;

        if (!extract || extract.trim().length === 0) {
            return null;
        }

        return {
            title: pageTitle,
            text: extract,
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(pageTitle.replace(/ /g, '_'))}`
        };
    } catch (error) {
        console.error('Search error:', error);
        return null;
    }
}

// Also search DuckDuckGo Instant Answer API as a fallback
async function searchDDG(query) {
    try {
        const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
        const res = await fetch(url, { mode: 'cors' }).catch(() => null);

        if (!res || !res.ok) return null;

        const data = await res.json();

        if (data.AbstractText && data.AbstractText.length > 0) {
            return {
                title: data.Heading || query,
                text: data.AbstractText,
                url: data.AbstractURL || ''
            };
        }

        // Try related topics
        if (data.RelatedTopics && data.RelatedTopics.length > 0) {
            const texts = data.RelatedTopics
                .filter(t => t.Text)
                .slice(0, 3)
                .map(t => t.Text);
            if (texts.length > 0) {
                return {
                    title: data.Heading || query,
                    text: texts.join(' '),
                    url: data.AbstractURL || ''
                };
            }
        }

        return null;
    } catch (error) {
        console.error('DDG search error:', error);
        return null;
    }
}

// Adapt the response to the grade level
function adaptResponse(text, grade) {
    const settings = gradeSettings[grade];
    if (!text) return settings.noResult;

    // Split into sentences
    let sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    // Limit sentences based on grade
    sentences = sentences.slice(0, settings.maxSentences);
    let response = sentences.join(' ').trim();

    // Simplify for primary school
    if (settings.simplify) {
        const simplifications = [
            [/\bapproximately\b/gi, 'about'],
            [/\butilize\b/gi, 'use'],
            [/\bconsequently\b/gi, 'so'],
            [/\bnevertheless\b/gi, 'but'],
            [/\bfurthermore\b/gi, 'also'],
            [/\bdemonstrate\b/gi, 'show'],
            [/\bsignificant\b/gi, 'important'],
            [/\bnumerous\b/gi, 'many'],
            [/\bfrequently\b/gi, 'often'],
            [/\bcommence\b/gi, 'start'],
            [/\bterminate\b/gi, 'end'],
            [/\bpurchase\b/gi, 'buy'],
            [/\brequire\b/gi, 'need'],
            [/\bassist\b/gi, 'help'],
            [/\battempt\b/gi, 'try'],
            [/\bsufficient\b/gi, 'enough'],
            [/\bprimarily\b/gi, 'mainly'],
            [/\binitially\b/gi, 'at first'],
            [/\bsubsequently\b/gi, 'then'],
            [/\bphenomenon\b/gi, 'event'],
            [/\bphenomena\b/gi, 'events'],
            [/\bcomprise\b/gi, 'include'],
            [/\bfacilitate\b/gi, 'help with'],
        ];

        simplifications.forEach(([pattern, replacement]) => {
            response = response.replace(pattern, replacement);
        });
    }

    return response;
}

// Format the final response with source info
function formatResponse(result, adaptedText, grade) {
    const settings = gradeSettings[grade];
    let response = `${settings.greeting}<br><br>${adaptedText}`;

    if (result && result.url) {
        response += `<br><br>📎 <em>Source: <a href="${result.url}" target="_blank" style="color: var(--primary); text-decoration: underline;">${result.title}</a></em>`;
    }

    // Add grade-appropriate follow-up
    if (grade === 'primary') {
        response += '<br><br>🙋 Want me to explain any part more simply?';
    } else if (grade === 'middle') {
        response += '<br><br>💡 Would you like me to go deeper into any part of this?';
    } else {
        response += '<br><br>🔍 Want a more detailed analysis or related topics?';
    }

    return response;
}

// Main search and respond function
async function getWebAnswer(userMessage) {
    const grade = document.getElementById('chatGrade').value;

    // Try Wikipedia first
    let result = await searchWeb(userMessage);

    // Fallback to DuckDuckGo
    if (!result) {
        result = await searchDDG(userMessage);
    }

    if (!result) {
        return gradeSettings[grade].noResult + '<br><br>💡 Try asking about a specific topic like "What is photosynthesis?" or "Tell me about the solar system."';
    }

    const adaptedText = adaptResponse(result.text, grade);
    return formatResponse(result, adaptedText, grade);
}

// Add message to chat
function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    const avatar = type === 'ai' ? '🤖' : '👤';

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-bubble">${text}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTyping() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-bubble">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-light); margin-top: 0.5rem;">🔍 Searching the web...</div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

// Send message
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    // Hide suggestions after first message
    const suggestions = document.getElementById('topicSuggestions');
    if (suggestions) suggestions.style.display = 'none';

    // Add user message
    addMessage(message, 'user');
    input.value = '';

    // Disable input while searching
    input.disabled = true;

    // Show typing animation
    showTyping();

    try {
        // Fetch answer from the web
        const response = await getWebAnswer(message);
        removeTyping();
        addMessage(response, 'ai');
    } catch (error) {
        removeTyping();
        addMessage("Sorry, I had trouble searching for that. Please check your internet connection and try again. 🔌", 'ai');
    }

    // Re-enable input
    input.disabled = false;
    input.focus();
}

// Send topic from suggestion buttons
function sendTopic(button) {
    const input = document.getElementById('chatInput');
    input.value = button.textContent;
    sendMessage();
}

// Update topic suggestions based on grade and subject selection
document.addEventListener('DOMContentLoaded', () => {
    const gradeSelect = document.getElementById('chatGrade');
    const subjectSelect = document.getElementById('chatSubject');

    const topicMap = {
        'primary-math': ['What are fractions?', 'How does addition work?', 'What are shapes?', 'What is multiplication?', 'What is geometry?'],
        'primary-science': ['How do plants grow?', 'What are the planets?', 'Why does it rain?', 'What are dinosaurs?', 'How do magnets work?'],
        'primary-english': ['What are nouns?', 'What is a verb?', 'What are vowels?', 'What is a sentence?', 'What is an adjective?'],
        'primary-history': ['Who built the pyramids?', 'What is ancient Rome?', 'Who was George Washington?', 'What is the Silk Road?', 'What are fossils?'],
        'middle-math': ['What is algebra?', 'How to solve equations?', 'What is the Pythagorean theorem?', 'What are integers?', 'Explain ratios and proportions'],
        'middle-science': ['What is photosynthesis?', 'How do cells work?', 'What is the periodic table?', 'How do volcanoes form?', 'What is DNA?'],
        'middle-english': ['What is a metaphor?', 'What are literary devices?', 'How to write an essay?', 'What is alliteration?', 'What is a protagonist?'],
        'middle-history': ['What was the Renaissance?', 'What caused World War I?', 'What is democracy?', 'Who was Cleopatra?', 'What was the Industrial Revolution?'],
        'high-math': ['What is calculus?', 'Explain derivatives', 'What are logarithms?', 'What is trigonometry?', 'What are complex numbers?'],
        'high-science': ['How does quantum physics work?', 'What is organic chemistry?', 'Explain Newton\'s laws of motion', 'What is gene expression?', 'What is thermodynamics?'],
        'high-english': ['What is existentialism in literature?', 'Explain Shakespeare\'s themes', 'What is rhetorical analysis?', 'What is postmodernism?', 'What is stream of consciousness?'],
        'high-history': ['What caused the Cold War?', 'What is imperialism?', 'What was the French Revolution?', 'What is Marxism?', 'What caused the Great Depression?']
    };

    function updateTopics() {
        const key = `${gradeSelect.value}-${subjectSelect.value}`;
        const suggestions = document.getElementById('topicSuggestions');
        const topics = topicMap[key] || topicMap['middle-math'];

        suggestions.innerHTML = topics.map(t =>
            `<button class="topic-btn" onclick="sendTopic(this)">${t}</button>`
        ).join('');
        suggestions.style.display = 'flex';
    }

    if (gradeSelect && subjectSelect) {
        gradeSelect.addEventListener('change', updateTopics);
        subjectSelect.addEventListener('change', updateTopics);
    }
});
