function loadSidebar() {
    const sidebarHTML = `
        <nav id="sidebar">
            <h3 style="display: flex; align-items: center; gap: 10px;">
                <img src="../images/submissionapp300by300.png" alt="truAudits Logo" style="width: 24px; height: 24px; border-radius: 4px;">
                Help Topics
            </h3>
            <ul class="nav-list">
                <li><a href="index.html" class="nav-link" id="link-index">Welcome</a></li>
                <li><a href="document-repository.html" class="nav-link" id="link-document-repository">Document Repository</a></li>
                <!-- ADD FUTURE LINKS HERE -->
            </ul>
        </nav>
    `;
    
    // Inject sidebar into placeholder
    const container = document.getElementById('sidebar-placeholder');
    if(container) {
        container.innerHTML = sidebarHTML;
        
        // Highlight active link based on current page URL
        const path = window.location.pathname;
        const page = path.split('/').pop() || "index.html"; 
        
        const activeLink = document.querySelector(\`.nav-link[href="\${page}"]\`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <img src="../images/submissionapp300by300.png" alt="truAudits Logo">
            &copy; 2026 truAudits by truRigel Team | Secured via Microsoft Store
        </footer>
    `;
    
    // Inject footer into placeholder
    const container = document.getElementById('footer-placeholder');
    if(container) {
        container.innerHTML = footerHTML;
    }
}

// Automatically load components when the script is loaded
document.addEventListener("DOMContentLoaded", () => {
    loadSidebar();
    loadFooter();
});