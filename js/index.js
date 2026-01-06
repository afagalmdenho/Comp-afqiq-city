document.addEventListener('DOMContentLoaded', function() {
            // تغيير لون شريط التنقل عند التمرير
            const navbar = document.getElementById('navbar');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
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
                    
                    // تحديث الرابط النشط
                    links.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // تأثيرات التمرير السلس للروابط
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href === '#') return;
                    
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        
                        const targetId = href;
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
            
            // محاكاة إرسال النماذج
            const consultationForm = document.getElementById('consultationForm');
            
            consultationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('شكراً لتواصلكم مع أفق المدينة! سيتصل بكم أحد مستشارينا في أقرب وقت.');
                this.reset();
            });
            
            // تأثيرات عند تحميل الصفحة
            const serviceCards = document.querySelectorAll('.service-card');
            const featureItems = document.querySelectorAll('.feature-item');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // تطبيق تأثيرات الظهور التدريجي على بطاقات الخدمات
            serviceCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.transitionDelay = `${index * 0.1}s`;
                
                observer.observe(card);
            });
            
            // تأثيرات على عناصر الميزات
            featureItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.transitionDelay = `${index * 0.1}s`;
                
                observer.observe(item);
            });
            
            // إضافة تأثير على صورة قسم "لماذا نحن"
            const whyUsImage = document.querySelector('.why-us-image');
            if (whyUsImage) {
                whyUsImage.style.opacity = '0';
                whyUsImage.style.transform = 'translateX(30px)';
                whyUsImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                const imageObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }
                    });
                }, observerOptions);
                
                imageObserver.observe(whyUsImage);
            }
            
            // رقم الهاتف النقر للاتصال
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
        });