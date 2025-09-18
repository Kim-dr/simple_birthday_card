let celebrationActive = false;

        function startCelebration() {
            const birthdayText = document.getElementById('birthdayText');
            
            if (celebrationActive) {
                // Hide the birthday text and stop celebration
                birthdayText.classList.remove('show');
                birthdayText.classList.add('hide');
                celebrationActive = false;
                
                // Change button text
                document.querySelector('.celebration-btn').innerHTML = '🎆 Let\'s Celebrate! 🎆';
                
                setTimeout(() => {
                    birthdayText.classList.remove('hide');
                }, 500);
            } else {
                // Show birthday text and start celebration
                birthdayText.classList.add('show');
                celebrationActive = true;
                
                // Change button text
                document.querySelector('.celebration-btn').innerHTML = '✨ Hide Celebration ✨';
                
                // Create balloons
                createBalloons();
                
                // Create fireworks
                createFireworks();
                
                // Add music notes
                createMusicNotes();
            }
        }

        function createBalloons() {
            const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
            
            for (let i = 0; i < 15; i++) {
                const balloon = document.createElement('div');
                balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
                balloon.style.left = Math.random() * window.innerWidth + 'px';
                balloon.style.top = window.innerHeight + 100 + 'px';
                balloon.style.animationDelay = Math.random() * 2 + 's';
                balloon.style.animationDuration = (3 + Math.random() * 2) + 's';
                
                document.body.appendChild(balloon);
                
                // Make balloon visible and float up
                setTimeout(() => {
                    balloon.style.opacity = '1';
                    balloon.style.transform = `translateY(-${window.innerHeight + 200}px)`;
                    balloon.style.transition = 'transform 4s ease-out, opacity 0.5s ease';
                }, Math.random() * 1000);
                
                // Remove balloon after animation
                setTimeout(() => {
                    balloon.remove();
                }, 6000);
            }
        }

        function createFireworks() {
            const colors = ['#ff6b6b', '#74b9ff', '#fdcb6e', '#55a3ff', '#fd79a8', '#00b894'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight * 0.7;
                    
                    for (let j = 0; j < 12; j++) {
                        const firework = document.createElement('div');
                        firework.className = 'firework explode';
                        firework.style.left = x + 'px';
                        firework.style.top = y + 'px';
                        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                        
                        const angle = (j * 30) * Math.PI / 180;
                        const distance = 100 + Math.random() * 50;
                        const endX = x + Math.cos(angle) * distance;
                        const endY = y + Math.sin(angle) * distance;
                        
                        firework.style.setProperty('--end-x', endX + 'px');
                        firework.style.setProperty('--end-y', endY + 'px');
                        
                        document.body.appendChild(firework);
                        
                        setTimeout(() => firework.remove(), 1000);
                    }
                }, i * 200);
            }
        }

        function createMusicNotes() {
            const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
            
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.className = 'music-note';
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];
                    note.style.left = Math.random() * window.innerWidth + 'px';
                    note.style.top = window.innerHeight - 50 + 'px';
                    note.style.color = ['#ff6b6b', '#74b9ff', '#fdcb6e', '#55a3ff', '#fd79a8'][Math.floor(Math.random() * 5)];
                    note.style.animationDelay = Math.random() * 1 + 's';
                    
                    document.body.appendChild(note);
                    
                    setTimeout(() => note.remove(), 3000);
                }, i * 300);
            }
        }

        // Add some interactive card behaviors
        document.getElementById('card').addEventListener('click', function() {
            this.style.transform = 'rotate(-5deg) scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'rotate(-5deg) scale(1.02)';
            }, 200);
        });

        // Random confetti effect on page load
        window.addEventListener('load', function() {
            setTimeout(() => {
                for (let i = 0; i < 50; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.style.position = 'absolute';
                        confetti.style.width = '10px';
                        confetti.style.height = '10px';
                        confetti.style.background = ['#ff6b6b', '#74b9ff', '#fdcb6e', '#55a3ff', '#fd79a8'][Math.floor(Math.random() * 5)];
                        confetti.style.left = Math.random() * window.innerWidth + 'px';
                        confetti.style.top = '-10px';
                        confetti.style.opacity = '0.8';
                        confetti.style.borderRadius = '50%';
                        confetti.style.pointerEvents = 'none';
                        
                        document.body.appendChild(confetti);
                        
                        confetti.animate([
                            { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                            { transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
                        ], {
                            duration: 3000 + Math.random() * 2000,
                            easing: 'linear'
                        }).onfinish = () => confetti.remove();
                    }, i * 50);
                }
            }, 1000);
        });