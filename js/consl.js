document.addEventListener('DOMContentLoaded', function() {
            // تغيير لون شريط التنقل عند التمرير
            const navbar = document.getElementById('navbar');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // تأثير الظهور التدريجي للعناصر
                const animatedElements = document.querySelectorAll('.feature-box, .step');
                animatedElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            });
            
            // القائمة المتنقلة
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // إغلاق القائمة عند النقر على رابط
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // محاكاة إرسال النماذج
            const consultationForm = document.getElementById('consultationForm');
            
            consultationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('شكراً لطلب الاستشارة الهندسية! سيتصل بكم أحد مهندسينا المتخصصين خلال 24 ساعة.');
                this.reset();
            });
            
            // إعداد تأثيرات الظهور للعناصر
            const featureBoxes = document.querySelectorAll('.feature-box');
            const steps = document.querySelectorAll('.step');
            
            featureBoxes.forEach((box, index) => {
                box.style.opacity = '0';
                box.style.transform = 'translateY(30px)';
                box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                box.style.transitionDelay = `${index * 0.1}s`;
            });
            
            steps.forEach((step, index) => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(30px)';
                step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                step.style.transitionDelay = `${index * 0.2}s`;
            });
            
            // تشغيل تأثير الظهور عند التحميل
            window.dispatchEvent(new Event('scroll'));
        });