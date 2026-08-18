// ===== Dashboard Interactivity =====

const gradeContent = {
    k: { subjects: [
        { icon: "🔢", name: "Numbers", desc: "Counting 1-20 & Number Recognition", progress: 65 },
        { icon: "🔬", name: "Nature", desc: "Animals, Plants & Seasons", progress: 50 },
        { icon: "📖", name: "Reading", desc: "Alphabet, Phonics & Simple Words", progress: 78 },
        { icon: "🎨", name: "Art & Colors", desc: "Colors, Shapes & Drawing", progress: 90 }
    ]},
    1: { subjects: [
        { icon: "🔢", name: "Math", desc: "Addition & Subtraction to 20", progress: 60 },
        { icon: "🔬", name: "Science", desc: "Weather, Animals & Senses", progress: 45 },
        { icon: "📖", name: "English", desc: "Sight Words & Simple Sentences", progress: 70 },
        { icon: "🏛️", name: "Social Studies", desc: "Community Helpers & Maps", progress: 55 }
    ]},
    2: { subjects: [
        { icon: "🔢", name: "Math", desc: "Place Value & Basic Multiplication", progress: 58 },
        { icon: "🔬", name: "Science", desc: "Life Cycles & Habitats", progress: 62 },
        { icon: "📖", name: "English", desc: "Reading Comprehension & Grammar", progress: 75 },
        { icon: "🏛️", name: "Social Studies", desc: "Maps, Communities & History", progress: 40 }
    ]},
    3: { subjects: [
        { icon: "🔢", name: "Math", desc: "Multiplication, Division & Fractions", progress: 55 },
        { icon: "🔬", name: "Science", desc: "Forces, Matter & Ecosystems", progress: 48 },
        { icon: "📖", name: "English", desc: "Paragraphs, Grammar & Vocabulary", progress: 80 },
        { icon: "🏛️", name: "History", desc: "Early Civilizations & Geography", progress: 42 }
    ]},
    4: { subjects: [
        { icon: "🔢", name: "Math", desc: "Multi-digit Operations & Decimals", progress: 67 },
        { icon: "🔬", name: "Science", desc: "Earth Science & Simple Machines", progress: 52 },
        { icon: "📖", name: "English", desc: "Essay Writing & Literary Elements", progress: 73 },
        { icon: "🏛️", name: "History", desc: "State History & Government Basics", progress: 60 }
    ]},
    5: { subjects: [
        { icon: "🔢", name: "Mathematics", desc: "Fractions, Decimals & Geometry", progress: 72 },
        { icon: "🔬", name: "Science", desc: "Living Things & Earth Science", progress: 58 },
        { icon: "📖", name: "English", desc: "Reading Comprehension & Writing", progress: 85 },
        { icon: "🏛️", name: "History", desc: "Ancient Civilizations & Geography", progress: 45 }
    ]},
    6: { subjects: [
        { icon: "🔢", name: "Math", desc: "Ratios, Rates & Expressions", progress: 63 },
        { icon: "🔬", name: "Science", desc: "Cells, Energy & Weather Systems", progress: 55 },
        { icon: "📖", name: "English", desc: "Literary Analysis & Essay Structure", progress: 70 },
        { icon: "🏛️", name: "History", desc: "Ancient World History", progress: 48 }
    ]},
    7: { subjects: [
        { icon: "🔢", name: "Pre-Algebra", desc: "Equations, Inequalities & Proportions", progress: 50 },
        { icon: "🔬", name: "Life Science", desc: "Biology, Genetics & Ecosystems", progress: 62 },
        { icon: "📖", name: "English", desc: "Argumentative Writing & Poetry", progress: 68 },
        { icon: "🏛️", name: "History", desc: "Medieval to Early Modern History", progress: 43 }
    ]},
    8: { subjects: [
        { icon: "🔢", name: "Algebra I", desc: "Linear Equations & Functions", progress: 55 },
        { icon: "🔬", name: "Physical Science", desc: "Chemistry & Physics Basics", progress: 47 },
        { icon: "📖", name: "English", desc: "Research Papers & Critical Reading", progress: 72 },
        { icon: "🏛️", name: "History", desc: "US History & Civics", progress: 58 }
    ]},
    9: { subjects: [
        { icon: "🔢", name: "Algebra II", desc: "Polynomials, Quadratics & Logarithms", progress: 45 },
        { icon: "🔬", name: "Biology", desc: "Cell Biology, Genetics & Evolution", progress: 52 },
        { icon: "📖", name: "English", desc: "World Literature & Composition", progress: 65 },
        { icon: "🏛️", name: "World History", desc: "Global Civilizations & Conflict", progress: 40 }
    ]},
    10: { subjects: [
        { icon: "🔢", name: "Geometry", desc: "Proofs, Theorems & Trigonometry", progress: 48 },
        { icon: "🔬", name: "Chemistry", desc: "Atomic Structure, Bonds & Reactions", progress: 42 },
        { icon: "📖", name: "English", desc: "American Literature & Rhetoric", progress: 60 },
        { icon: "🏛️", name: "US History", desc: "Colonial Era to Modern America", progress: 55 }
    ]},
    11: { subjects: [
        { icon: "🔢", name: "Pre-Calculus", desc: "Functions, Limits & Series", progress: 38 },
        { icon: "🔬", name: "Physics", desc: "Mechanics, Waves & Electricity", progress: 35 },
        { icon: "📖", name: "AP English", desc: "Literary Criticism & Analysis", progress: 58 },
        { icon: "🏛️", name: "AP History", desc: "In-Depth US/World History", progress: 50 }
    ]},
    12: { subjects: [
        { icon: "🔢", name: "Calculus", desc: "Derivatives, Integrals & Applications", progress: 30 },
        { icon: "🔬", name: "AP Science", desc: "Advanced Bio/Chem/Physics", progress: 35 },
        { icon: "📖", name: "English", desc: "College Prep Writing & Literature", progress: 62 },
        { icon: "🏛️", name: "Government", desc: "Political Systems & Economics", progress: 45 }
    ]}
};

document.addEventListener('DOMContentLoaded', () => {
    const gradeSelect = document.getElementById('gradeSelect');
    if (gradeSelect) {
        gradeSelect.addEventListener('change', updateDashboard);
    }
});

function updateDashboard() {
    const grade = document.getElementById('gradeSelect').value;
    const content = gradeContent[grade];
    if (!content) return;

    const colors = ['math', 'science', 'english', 'history'];
    const grid = document.getElementById('subjectGrid');

    grid.innerHTML = content.subjects.map((s, i) => `
        <div class="subject-card" onclick="window.location.href='chat.html'">
            <span class="subject-icon">${s.icon}</span>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <div class="progress-bar">
                <div class="progress-fill ${colors[i]}" style="width: ${s.progress}%"></div>
            </div>
        </div>
    `).join('');
}
