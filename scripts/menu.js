const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized computer programmers.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const coursesList = document.querySelector('#courses-list');
const totalCreditsEl = document.querySelector('#total-credits');
const allBtn = document.querySelector('#all-btn');
const cseBtn = document.querySelector('#cse-btn');
const wddBtn = document.querySelector('#wdd-btn');
const filterButtons = document.querySelectorAll('.filters button');

function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function displayCourses(filteredCourses) {
    coursesList.innerHTML = '';

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        
        if (course.completed) {
            card.classList.add('completed');
        }

        card.textContent = `${course.subject} ${course.number}`;
        coursesList.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = `Total credits for displayed courses: ${totalCredits}`;
}

allBtn.addEventListener('click', (e) => {
    setActiveButton(e.target);
    displayCourses(courses);
});

cseBtn.addEventListener('click', (e) => {
    setActiveButton(e.target);
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

wddBtn.addEventListener('click', (e) => {
    setActiveButton(e.target);
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

displayCourses(courses);

