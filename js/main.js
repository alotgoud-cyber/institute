// =========================================
// Main JavaScript - Course rendering
// =========================================

// ----- Render Course Card -----
function renderCourseCard(course) {
  return `
    <div class="course-card">
      <div class="course-image style-${course.style}">ENGLISH</div>
      <div class="course-info">
        <div class="course-header">
          <span class="course-name">${course.name}</span>
          <span class="course-duration">${course.duration}</span>
        </div>
      </div>
      <div class="course-price-row">
        <span class="price-label">price</span>
        <span class="price-value">$ ${course.price}</span>
      </div>
      <a href="course-details.html?id=${course.id}" class="btn-details">details</a>
    </div>
  `;
}

// ----- Render featured courses on Home page (first 4) -----
function renderFeaturedCourses() {
  const container = document.getElementById('featured-courses');
  if (!container) return;
  container.innerHTML = COURSES.slice(0, 4).map(c => renderCourseCard(c)).join('');
}

// ----- Render all courses on Courses page -----
function renderAllCourses() {
  const container = document.getElementById('all-courses');
  if (!container) return;
  container.innerHTML = COURSES.map(c => renderCourseCard(c)).join('');
}

// ----- Render Course Details Page -----
function renderCourseDetails() {
  const container = document.getElementById('course-details-content');
  if (!container) return;

  // Read ID from URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;

  const course = COURSES.find(c => c.id === id) || COURSES[0];

  document.getElementById('course-title').textContent = `${course.duration} ${course.name}`;
  document.getElementById('course-image').className = `details-image course-image style-${course.style}`;
  document.getElementById('course-price').textContent = `${course.price}$`;
  document.getElementById('register-link').href = `booking.html?courseId=${course.id}`;

  container.innerHTML = `
    <p class="details-text">${course.description}</p>
    <h3>Course objectives</h3>
    <ul>
      ${course.objectives.map(o => `<li>${o}</li>`).join('')}
    </ul>
    <h3>Teaching methods</h3>
    <ul>
      ${course.methods.map(m => `<li>${m}</li>`).join('')}
    </ul>
  `;
}

// ----- Init: Run on DOM Ready -----
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedCourses();
  renderAllCourses();
  renderCourseDetails();
});
