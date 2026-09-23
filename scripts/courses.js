const coursesData = [
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

document.addEventListener('DOMContentLoaded', () => {
    const coursesList = document.querySelector('#courses-list');
    const totalCreditsEl = document.querySelector('#total-credits');
    const allBtn = document.querySelector('#all-btn');
    const cseBtn = document.querySelector('#cse-btn');
    const wddBtn = document.querySelector('#wdd-btn');
    const filterButtons = document.querySelectorAll('.filters button');
    const courseDetailsModal = document.querySelector('#course-details');

    if (!coursesList || !courseDetailsModal) return;

    function setActiveButton(activeBtn) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        if (activeBtn) activeBtn.classList.add('active');
    }

    function displayCourseDetails(course) {
        courseDetailsModal.innerHTML = `
            <div class="modal-header">
                <h2>${course.subject} ${course.number}</h2>
                <button id="close-modal">❌</button>
            </div>
            <div class="modal-body">
                <h3>${course.title}</h3>
                <p><strong>${course.credits} credits</strong></p>
                <p><strong>Certificate:</strong> ${course.certificate}</p>
                <p>${course.description}</p>
                <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
            </div>
        `;

        courseDetailsModal.showModal();

        const closeModalBtn = document.querySelector('#close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                courseDetailsModal.close();
            });
        }
    }

    courseDetailsModal.addEventListener('click', (e) => {
        const dialogDimensions = courseDetailsModal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            courseDetailsModal.close();
        }
    });

    function displayCourses(filteredCourses) {
        coursesList.innerHTML = '';

        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('course-card');
            
            if (course.completed) {
                card.classList.add('completed');
            }

            card.textContent = `${course.subject} ${course.number}`;

            card.addEventListener('click', () => {
                displayCourseDetails(course);
            });

            coursesList.appendChild(card);
        });

        if (totalCreditsEl) {
            const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
            totalCreditsEl.textContent = `Total credits for displayed courses: ${totalCredits}`;
        }
    }

    if (allBtn) {
        allBtn.addEventListener('click', (e) => {
            setActiveButton(e.target);
            displayCourses(coursesData);
        });
    }

    if (cseBtn) {
        cseBtn.addEventListener('click', (e) => {
            setActiveButton(e.target);
            const cseCourses = coursesData.filter(course => course.subject === 'CSE');
            displayCourses(cseCourses);
        });
    }

    if (wddBtn) {
        wddBtn.addEventListener('click', (e) => {
            setActiveButton(e.target);
            const wddCourses = coursesData.filter(course => course.subject === 'WDD');
            displayCourses(wddCourses);
        });
    }

    displayCourses(coursesData);

    const yearSpan = document.querySelector('#currentyear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModP = document.querySelector('#lastModified');
    if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`;
});