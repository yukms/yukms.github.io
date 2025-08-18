// 네비게이션 활성화 스크립트
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.right-nav a');
    const sections = document.querySelectorAll('section[id]');
    
    // 현재 보이는 섹션 감지
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // 네비게이션 링크 활성화 업데이트
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', updateActiveNav);
    
    // 초기 활성화 설정
    updateActiveNav();
    
    // 부드러운 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
