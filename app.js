// ========================================
// KEYRADDIIN EDUCATION APP
// Exam-Focused Version
// ========================================


// ========================================
// EXAM LINKS
// ========================================

const EXAM_INFORMATION_URL =
    "https://keyraddiin18-prog.github.io/KEYRADDIIN-registration.et/";

const EXAM_CENTER_URL =
    "https://keyraddiin18-prog.github.io/KEYRADDIIN-EXAM-CENTER-SECOND-BRANCH/";


// ========================================
// KEYRADDIIN MEDIA LINKS
// ========================================

const TELEGRAM_URL =
    "https://t.me/Keyraddiinmedia";

const YOUTUBE_URL =
    "https://youtube.com/@keyraddiin-j2b";

const WEBSITE_URL =
    "https://keyraddiin-media.onrender.com";

const KEYRADDIIN_MEDIA_ONLINE_URL =
    "https://keyraddiin18-prog.github.io/KEYRADDIIN-MEDIA";


// ========================================
// CONTACT INFORMATION
// ========================================

const PHONE_1 =
    "+251799574155";

const PHONE_2 =
    "+251995555866";

const EMAIL_1 =
    "Keyrooabdallaa@gmail.com";

const EMAIL_2 =
    "Keyraddiin18@gmail.com";


// ========================================
// GRADE DATA
// ========================================

const grades = [
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12"
];


// ========================================
// GRADE EXAM SELECTION
// ========================================

const gradeCards =
    document.querySelectorAll(".grade-card");

gradeCards.forEach((card) => {

    card.addEventListener("click", () => {

        const grade =
            card.querySelector("strong").textContent.trim();

        showGradeExams(grade);

    });

});


// ========================================
// SHOW GRADE EXAMS
// ========================================

function showGradeExams(grade) {

    const main =
        document.querySelector("main");

    main.innerHTML = `

        <section class="exam-screen">

            <button
                class="back-button"
                onclick="location.reload()"
            >
                ← Home
            </button>


            <div class="exam-header">

                <div class="exam-icon">
                    🎓
                </div>

                <h2>
                    ${grade}
                </h2>

                <p>
                    Select an exam to continue.
                </p>

            </div>


            <div class="exam-options">


                <!-- EXAM CENTER -->

                <a
                    class="exam-option"
                    href="${EXAM_CENTER_URL}"
                    target="_blank"
                    rel="noopener"
                >

                    <div class="exam-option-icon">
                        📝
                    </div>


                    <div class="exam-option-text">

                        <strong>
                            EXAM CENTER
                        </strong>

                        <span>
                            Open available exams for ${grade}
                        </span>

                    </div>


                    <b>
                        ›
                    </b>

                </a>


                <!-- EXAM INFORMATION -->

                <a
                    class="exam-option"
                    href="${EXAM_INFORMATION_URL}"
                    target="_blank"
                    rel="noopener"
                >

                    <div class="exam-option-icon">
                        📋
                    </div>


                    <div class="exam-option-text">

                        <strong>
                            EXAM INFORMATION
                        </strong>

                        <span>
                            Registration and exam information
                        </span>

                    </div>


                    <b>
                        ›
                    </b>

                </a>


            </div>

        </section>

    `;

}


// ========================================
// FEATURE CARDS
// ========================================

const featureCards =
    document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {

    card.addEventListener("click", () => {

        const strong =
            card.querySelector("strong");

        if (!strong) {
            return;
        }

        const title =
            strong.textContent.trim();


        // EXAM CENTER

        if (title === "Exam Center") {

            window.open(
                EXAM_CENTER_URL,
                "_blank"
            );

            return;
        }


        // EXAM INFORMATION

        if (title === "Exam Information") {

            window.open(
                EXAM_INFORMATION_URL,
                "_blank"
            );

            return;
        }


        // MY RESULTS

        if (title === "My Results") {

            showResultsScreen();

            return;
        }


        // ANNOUNCEMENTS

        if (title === "Announcements") {

            showAnnouncementsScreen();

            return;
        }

    });

});


// ========================================
// BOTTOM NAVIGATION
// ========================================

const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navItems.forEach((nav) => {

            nav.classList.remove("active");

        });

        item.classList.add("active");


        const small =
            item.querySelector("small");

        if (!small) {
            return;
        }


        const page =
            small.textContent.trim();


        // HOME

        if (page === "Home") {

            location.reload();

            return;
        }


        // EXAMS

        if (page === "Exams") {

            showExamsScreen();

            return;
        }


        // RESULTS

        if (page === "Results") {

            showResultsScreen();

            return;
        }


        // PROFILE

        if (page === "Profile") {

            showProfileScreen();

            return;
        }

    });

});


// ========================================
// PROFILE BUTTON
// ========================================

const profileButton =
    document.querySelector(".profile-button");

if (profileButton) {

    profileButton.addEventListener(
        "click",
        () => {

            showProfileScreen();

        }
    );

}


// ========================================
// EXAMS SCREEN
// ========================================

function showExamsScreen() {

    const main =
        document.querySelector("main");

    main.innerHTML = `

        <section class="exam-screen">

            <button
                class="back-button"
                onclick="location.reload()"
            >
                ← Home
            </button>


            <div class="exam-header">

                <div class="exam-icon">
                    📝
                </div>

                <h2>
                    EXAM CENTER
                </h2>

                <p>
                    Choose your grade and access
                    available exams.
                </p>

            </div>


            <div class="section-title">

                <h2>
                    Select Grade
                </h2>

                <span>
                    7–12
                </span>

            </div>


            <div class="grade-grid">

                ${grades.map((grade) => `

                    <button
                        class="grade-card"
                        onclick="showGradeExams('${grade}')"
                    >

                        <strong>
                            ${grade}
                        </strong>

                        <span>
                            View Exams
                        </span>

                    </button>

                `).join("")}

            </div>


            <div style="height: 18px;"></div>


            <div class="exam-options">


                <!-- OPEN EXAM CENTER -->

                <a
                    class="exam-option"
                    href="${EXAM_CENTER_URL}"
                    target="_blank"
                    rel="noopener"
                >

                    <div class="exam-option-icon">
                        📝
                    </div>

                    <div class="exam-option-text">

                        <strong>
                            OPEN EXAM CENTER
                        </strong>

                        <span>
                            Go directly to the exam center
                        </span>

                    </div>

                    <b>
                        ›
                    </b>

                </a>


                <!-- EXAM INFORMATION -->

                <a
                    class="exam-option"
                    href="${EXAM_INFORMATION_URL}"
                    target="_blank"
                    rel="noopener"
                >

                    <div class="exam-option-icon">
                        📋
                    </div>

                    <div class="exam-option-text">

                        <strong>
                            EXAM INFORMATION
                        </strong>

                        <span>
                            Registration and exam details
                        </span>

                    </div>

                    <b>
                        ›
                    </b>

                </a>


            </div>

        </section>

    `;

}


// ========================================
// RESULTS SCREEN
// ========================================

function showResultsScreen() {

    const main =
        document.querySelector("main");

    main.innerHTML = `

        <section class="subjects-screen">

            <button
                class="back-button"
                onclick="location.reload()"
            >
                ← Home
            </button>


            <div class="subjects-header">

                <div class="subjects-grade-icon">
                    🏆
                </div>

                <div>

                    <span>
                        EXAM PERFORMANCE
                    </span>

                    <h2>
                        My Results
                    </h2>

                </div>

            </div>


            <div class="empty-state">

                <div>
                    🏆
                </div>

                <h3>
                    Your Results
                </h3>

                <p>
                    Your exam scores and performance
                    will appear here.
                </p>

            </div>

        </section>

    `;

}


// ========================================
// ANNOUNCEMENTS SCREEN
// ========================================

function showAnnouncementsScreen() {

    const main =
        document.querySelector("main");

    main.innerHTML = `

        <section class="subjects-screen">

            <button
                class="back-button"
                onclick="location.reload()"
            >
                ← Home
            </button>


            <!-- HEADER -->

            <div class="subjects-header">

                <div class="subjects-grade-icon">
                    📢
                </div>

                <div>

                    <span>
                        KEYRADDIIN MEDIA
                    </span>

                    <h2>
                        Announcements
                    </h2>

                </div>

            </div>


            <!-- =================================
                 OFFICIAL CHANNELS & WEBSITES
            ================================== -->

            <div class="section">

                <div class="section-title">

                    <h2>
                        Official Channels
                    </h2>

                    <span>
                        KEYRADDIIN MEDIA
                    </span>

                </div>


                <div class="feature-list">


                    <!-- TELEGRAM -->

                    <a
                        class="feature-card"
                        href="${TELEGRAM_URL}"
                        target="_blank"
                        rel="noopener"
                    >

                        <span class="feature-icon">
                            📢
                        </span>

                        <span>

                            <strong>
                                Telegram Channel
                            </strong>

                            <small>
                                Follow KEYRADDIIN MEDIA on Telegram
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- YOUTUBE -->

                    <a
                        class="feature-card"
                        href="${YOUTUBE_URL}"
                        target="_blank"
                        rel="noopener"
                    >

                        <span class="feature-icon">
                            ▶️
                        </span>

                        <span>

                            <strong>
                                YouTube Channel
                            </strong>

                            <small>
                                Watch KEYRADDIIN MEDIA content
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- RENDER WEBSITE -->

                    <a
                        class="feature-card"
                        href="${WEBSITE_URL}"
                        target="_blank"
                        rel="noopener"
                    >

                        <span class="feature-icon">
                            🌐
                        </span>

                        <span>

                            <strong>
                                KEYRADDIIN MEDIA Website
                            </strong>

                            <small>
                                Visit the official website
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- GITHUB PAGES -->

                    <a
                        class="feature-card"
                        href="${KEYRADDIIN_MEDIA_ONLINE_URL}"
                        target="_blank"
                        rel="noopener"
                    >

                        <span class="feature-icon">
                            💻
                        </span>

                        <span>

                            <strong>
                                KEYRADDIIN MEDIA Online
                            </strong>

                            <small>
                                Access online KEYRADDIIN services
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                </div>

            </div>


            <!-- =================================
                 CONTACT INFORMATION
            ================================== -->

            <div class="section">

                <div class="section-title">

                    <h2>
                        Contact Us
                    </h2>

                    <span>
                        KEYRADDIIN MEDIA
                    </span>

                </div>


                <div class="feature-list">


                    <!-- PHONE 1 -->

                    <a
                        class="feature-card"
                        href="tel:${PHONE_1}"
                    >

                        <span class="feature-icon">
                            📞
                        </span>

                        <span>

                            <strong>
                                Contact Number
                            </strong>

                            <small>
                                +251 799 574 155
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- PHONE 2 -->

                    <a
                        class="feature-card"
                        href="tel:${PHONE_2}"
                    >

                        <span class="feature-icon">
                            📞
                        </span>

                        <span>

                            <strong>
                                Contact Number
                            </strong>

                            <small>
                                +251 995 555 866
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- EMAIL 1 -->

                    <a
                        class="feature-card"
                        href="mailto:${EMAIL_1}"
                    >

                        <span class="feature-icon">
                            ✉️
                        </span>

                        <span>

                            <strong>
                                Email
                            </strong>

                            <small>
                                ${EMAIL_1}
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                    <!-- EMAIL 2 -->

                    <a
                        class="feature-card"
                        href="mailto:${EMAIL_2}"
                    >

                        <span class="feature-icon">
                            ✉️
                        </span>

                        <span>

                            <strong>
                                Email
                            </strong>

                            <small>
                                ${EMAIL_2}
                            </small>

                        </span>

                        <b>
                            ›
                        </b>

                    </a>


                </div>

            </div>


        </section>

    `;

}


// ========================================
// PROFILE SCREEN
// ========================================

function showProfileScreen() {

    const main =
        document.querySelector("main");

    main.innerHTML = `

        <section class="subjects-screen">

            <button
                class="back-button"
                onclick="location.reload()"
            >
                ← Home
            </button>


            <div class="subjects-header">

                <div class="subjects-grade-icon">
                    👤
                </div>

                <div>

                    <span>
                        STUDENT ACCOUNT
                    </span>

                    <h2>
                        Profile
                    </h2>

                </div>

            </div>


            <div class="empty-state">

                <div>
                    🎓
                </div>

                <h3>
                    Student Profile
                </h3>

                <p>
                    Student account, Student ID and
                    personal information will be
                    added here.
                </p>

            </div>

        </section>

    `;

}


// ========================================
// APP READY
// ========================================

console.log(
    "KEYRADDIIN EDUCATION APP - Exam Focused Version Ready"
);