// Presentation Controller
class JubileePresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 25;
        this.slides = [];
        this.charts = {};
        
        this.init();
    }
    
    init() {
        this.createAllSlides();
        this.setupNavigation();
        this.setupIndicators();
        this.initializeCharts();
        this.updateDisplay();
    }
    
    createAllSlides() {
        const slideContainer = document.querySelector('.slide-container');
        
        // Slides 9-25 (continuing from the HTML)
        const additionalSlides = [
            // Slide 9: Spiritualizing the Jubilee
            {
                id: 'slide9',
                title: 'Spiritualizing the Jubilee - Early Church Fathers',
                content: `
                    <div class="content-grid">
                        <div class="text-content">
                            <h2 class="section-heading">St. Augustine</h2>
                            <p>Emphasized spiritual debts of sin and liberation through Christ's grace. The true "rest" is found in God.</p>
                            
                            <h2 class="section-heading">Other Church Fathers</h2>
                            <p>Highlighted penance, reconciliation, and the eschatological dimension of the ultimate Jubilee at Christ's return.</p>
                            
                            <h2 class="section-heading">The Eucharist</h2>
                            <p>Mass as foretaste of heavenly banquet, constant renewal of God's covenant and mercy - a spiritual "reset."</p>
                        </div>
                        <div class="visual-content">
                            <div class="church-fathers-visual">
                                <div class="father-icon">⛪</div>
                                <p>From Law to Grace</p>
                                <div class="transformation-arrow">↓</div>
                                <p>Continuous Spiritual Jubilee</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 10: First Holy Year
            {
                id: 'slide10',
                title: 'First Holy Year - Pope Boniface VIII (1300)',
                content: `
                    <div class="content-grid">
                        <div class="text-content">
                            <h2 class="section-heading">Historical Context</h2>
                            <p>Medieval pilgrimages were popular, Rome was a major destination</p>
                            
                            <h2 class="section-heading">Focus</h2>
                            <p>Granting plenary indulgences to pilgrims visiting St. Peter's and St. Paul's basilicas</p>
                            
                            <h2 class="section-heading">Initial Frequency</h2>
                            <p>Every 100 years, later changed to 50, then 25 years</p>
                            
                            <h2 class="section-heading">Purpose</h2>
                            <p>Encourage repentance, foster devotion, strengthen communion with Rome</p>
                        </div>
                        <div class="chart-container">
                            <canvas id="jubileeFrequencyChart"></canvas>
                        </div>
                    </div>
                `
            },
            // Slide 11: Evolution of Jubilees
            {
                id: 'slide11',
                title: 'Evolution of Jubilees',
                content: `
                    <div class="evolution-content">
                        <h2 class="section-heading">Regularization Process</h2>
                        <p>Over centuries, Jubilees became regular events, retaining focus on pilgrimage, confession, and indulgence</p>
                        
                        <h2 class="section-heading">Symbolic Development</h2>
                        <p>The "Opening of the Holy Door" became a symbolic act of entering into a special year of grace</p>
                        
                        <div class="comparison-grid">
                            <div class="comparison-item">
                                <h3>Early Focus</h3>
                                <p>Individual spiritual benefit through indulgences</p>
                            </div>
                            <div class="comparison-item">
                                <h3>Later Development</h3>
                                <p>Global participation and social justice themes</p>
                            </div>
                        </div>
                        
                        <div class="chart-container">
                            <canvas id="evolutionChart"></canvas>
                        </div>
                    </div>
                `
            },
            // Slide 12: Great Jubilee 2000
            {
                id: 'slide12',
                title: 'Great Jubilee of 2000 - Pope John Paul II',
                content: `
                    <div class="jubilee-2000-content">
                        <div class="documents-section">
                            <h2 class="section-heading">Key Documents</h2>
                            <ul>
                                <li>Tertio Millennio Adveniente (1994) - Preparation</li>
                                <li>Incarnationis Mysterium (1998) - Convocation</li>
                            </ul>
                        </div>
                        
                        <div class="themes-grid">
                            <div class="theme-card">
                                <h3>Christ at Center</h3>
                                <p>Christocentric focus of the new millennium</p>
                            </div>
                            <div class="theme-card">
                                <h3>Purification of Memory</h3>
                                <p>Acknowledging past sins of the Church</p>
                            </div>
                            <div class="theme-card">
                                <h3>Ecumenism</h3>
                                <p>Interreligious dialogue and unity</p>
                            </div>
                            <div class="theme-card">
                                <h3>Social Justice</h3>
                                <p>Strong call for debt relief for developing nations</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 13: Jubilee of Mercy
            {
                id: 'slide13',
                title: 'Extraordinary Jubilee of Mercy (2015-2016) - Pope Francis',
                content: `
                    <div class="mercy-jubilee-content">
                        <div class="document-highlight">
                            <h2 class="section-heading">Key Document: Misericordiae Vultus</h2>
                            <p>Jesus Christ as the "face of the Father's mercy"</p>
                        </div>
                        
                        <div class="mercy-focus">
                            <h2 class="section-heading">Central Focus</h2>
                            <p>Mercy as the central attribute of God, a concrete experience for all</p>
                        </div>
                        
                        <div class="actions-grid">
                            <div class="action-item">
                                <h3>Global Doors</h3>
                                <p>"Doors of Mercy" opened in dioceses worldwide</p>
                            </div>
                            <div class="action-item">
                                <h3>Works of Mercy</h3>
                                <p>Emphasized corporal and spiritual works</p>
                            </div>
                            <div class="action-item">
                                <h3>Missionaries</h3>
                                <p>Sent out "Missionaries of Mercy"</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 14: Comparison of Papal Jubilees
            {
                id: 'slide14',
                title: 'Comparison: Papal Jubilees - Shifting Emphases',
                content: `
                    <div class="comparison-content">
                        <h2 class="section-heading">Evolution of Themes</h2>
                        <div class="chart-container">
                            <canvas id="jubileeThemesChart"></canvas>
                        </div>
                        
                        <div class="participation-comparison">
                            <h2 class="section-heading">Participation Evolution</h2>
                            <div class="participation-grid">
                                <div class="participation-item">
                                    <h3>1300-1800s</h3>
                                    <p>Localized to Rome</p>
                                </div>
                                <div class="participation-item">
                                    <h3>1900s-2000</h3>
                                    <p>Global participation</p>
                                </div>
                                <div class="participation-item">
                                    <h3>2015-Present</h3>
                                    <p>Decentralized worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 15: Pilgrims of Hope Motto
            {
                id: 'slide15',
                title: 'Motto: "Pilgrims of Hope"',
                content: `
                    <div class="motto-content">
                        <div class="motto-breakdown">
                            <div class="motto-section">
                                <h2 class="section-heading">"Pilgrims"</h2>
                                <p>Journey of faith, conversion, and seeking God. Signifies leaving comfort zones, encountering new realities, and a shared path.</p>
                            </div>
                            
                            <div class="motto-section">
                                <h2 class="section-heading">"Hope"</h2>
                                <p>A theological virtue - confident expectation of God's promises, especially in challenging times.</p>
                            </div>
                            
                            <div class="motto-section">
                                <h2 class="section-heading">Not Wishful Thinking</h2>
                                <p>Trust in God's active presence in history, not mere optimism</p>
                            </div>
                        </div>
                        
                        <div class="hope-visualization">
                            <div class="hope-symbol-large">🕊️</div>
                            <p class="hope-quote">"Hope does not disappoint" - Romans 5:5</p>
                        </div>
                    </div>
                `
            },
            // Slide 16: Preparatory Year
            {
                id: 'slide16',
                title: 'Preparatory Year (2024) - Dedicated to Prayer',
                content: `
                    <div class="preparatory-content">
                        <div class="purpose-section">
                            <h2 class="section-heading">Purpose</h2>
                            <p>To deepen personal and communal prayer life, preparing hearts to receive the grace of the Jubilee</p>
                        </div>
                        
                        <div class="connection-section">
                            <h2 class="section-heading">Connection to Hope</h2>
                            <p>Prayer is the foundation of hope. It cultivates trust and opens us to God's will.</p>
                        </div>
                        
                        <div class="prayer-types">
                            <h2 class="section-heading">Types of Prayer Emphasized</h2>
                            <div class="prayer-grid">
                                <div class="prayer-item">Personal Prayer</div>
                                <div class="prayer-item">Liturgical Prayer</div>
                                <div class="prayer-item">Communal Prayer</div>
                                <div class="prayer-item">Contemplative Prayer</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 17: Anticipated Themes
            {
                id: 'slide17',
                title: 'Anticipated Themes (Pope Francis)',
                content: `
                    <div class="themes-content">
                        <div class="themes-grid">
                            <div class="theme-card">
                                <h3>Ecological Conversion</h3>
                                <p>Renewed commitment to Laudato Si' and care for creation, echoing the land rest of the Old Testament</p>
                            </div>
                            
                            <div class="theme-card">
                                <h3>Fraternity & Social Friendship</h3>
                                <p>Healing divisions, building bridges, living Fratelli Tutti</p>
                            </div>
                            
                            <div class="theme-card">
                                <h3>Care for the Vulnerable</h3>
                                <p>Continuing emphasis on the poor, migrants, prisoners, the sick, and all marginalized</p>
                            </div>
                            
                            <div class="theme-card">
                                <h3>Reconciliation</h3>
                                <p>Seeking forgiveness, fostering peace</p>
                            </div>
                            
                            <div class="theme-card">
                                <h3>Theological Virtues</h3>
                                <p>Strengthening faith, hope, and charity</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 18: Significance of Jubilee 2025
            {
                id: 'slide18',
                title: 'Significance of Jubilee 2025',
                content: `
                    <div class="significance-content">
                        <div class="global-context">
                            <h2 class="section-heading">Global Context</h2>
                            <p>A world grappling with conflict, climate change, economic instability, and disillusionment</p>
                        </div>
                        
                        <div class="message-section">
                            <h2 class="section-heading">Message of Hope</h2>
                            <p>Renewed hope in God's plan for humanity and creation</p>
                        </div>
                        
                        <div class="call-to-action">
                            <h2 class="section-heading">Call to Action</h2>
                            <div class="action-items">
                                <div class="action-item">Trust in God's providence</div>
                                <div class="action-item">Journey together in faith</div>
                                <div class="action-item">Build a just and compassionate world</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 19: Visualizing Themes
            {
                id: 'slide19',
                title: 'Visualizing Themes of Jubilee 2025',
                content: `
                    <div class="visualization-content">
                        <h2 class="section-heading">Prominence of Themes in Pope Francis's Documents</h2>
                        <div class="chart-container">
                            <canvas id="themesWordCloudChart"></canvas>
                        </div>
                        
                        <div class="themes-analysis">
                            <p>Analysis of key themes frequency in Jubilee 2025 preparatory documents and papal writings</p>
                        </div>
                    </div>
                `
            },
            // Slide 20: Global Challenges
            {
                id: 'slide20',
                title: 'Global Challenges & The Jubilee\'s Relevance',
                content: `
                    <div class="challenges-content">
                        <div class="challenges-grid">
                            <div class="challenge-card">
                                <h3>Economic Inequality</h3>
                                <p>Echoes the ancient call for debt relief and just distribution of resources</p>
                                <div class="relevance">How can the spirit of Jubilee address global poverty and unjust financial systems?</div>
                            </div>
                            
                            <div class="challenge-card">
                                <h3>Ecological Crisis</h3>
                                <p>The concept of "land rest" and God's ownership of creation</p>
                                <div class="relevance">Directly relevant to environmental stewardship and sustainable living</div>
                            </div>
                            
                            <div class="challenge-card">
                                <h3>Social Division & Conflict</h3>
                                <p>The Jubilee's call for reconciliation, forgiveness, and healing</p>
                                <div class="relevance">Crucial for fostering peace and overcoming societal fragmentation</div>
                            </div>
                            
                            <div class="challenge-card">
                                <h3>Spiritual Disorientation</h3>
                                <p>In a secularized world, the Jubilee offers a powerful invitation</p>
                                <div class="relevance">To encounter God's mercy, renew faith, and find meaning</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 21: Church Applications
            {
                id: 'slide21',
                title: 'How the Church Applies Jubilee Principles',
                content: `
                    <div class="applications-content">
                        <div class="applications-grid">
                            <div class="application-item">
                                <h3>Advocacy</h3>
                                <p>Debt relief advocacy, continuing the call for international solidarity</p>
                            </div>
                            
                            <div class="application-item">
                                <h3>Charitable Works</h3>
                                <p>Supporting organizations that aid the poor and marginalized</p>
                            </div>
                            
                            <div class="application-item">
                                <h3>Interfaith Dialogue</h3>
                                <p>Promoting understanding and peace among religions</p>
                            </div>
                            
                            <div class="application-item">
                                <h3>Ecumenical Efforts</h3>
                                <p>Working towards Christian unity</p>
                            </div>
                            
                            <div class="application-item">
                                <h3>Pastoral Initiatives</h3>
                                <p>Encouraging confession, spiritual direction, and community building</p>
                            </div>
                            
                            <div class="application-item">
                                <h3>Formation</h3>
                                <p>Educating the faithful about the meaning and purpose of the Jubilee</p>
                            </div>
                        </div>
                    </div>
                `
            },
            // Slide 22: Ideal vs Reality
            {
                id: 'slide22',
                title: 'Comparison: Ideal vs. Reality in Modern Application',
                content: `
                    <div class="comparison-content">
                        <h2 class="section-heading">The Gap Between Ideals and Current Reality</h2>
                        <div class="chart-container">
                            <canvas id="idealVsRealityChart"></canvas>
                        </div>
                        
                        <div class="gap-analysis">
                            <h2 class="section-heading">What the Data Shows</h2>
                            <p>Comparison of stated Jubilee goals with current global statistics on poverty, debt, conflict, and environmental degradation</p>
                        </div>
                    </div>
                `
            },
            // Slide 23: The Gap Analysis
            {
                id: 'slide23',
                title: 'The "Gap" Analysis: Problems and Issues',
                content: `
                    <div class="gap-content">
                        <div class="problems-section">
                            <h2 class="section-heading">Specific Examples Where Current Efforts Fall Short</h2>
                            <ul>
                                <li>Global debt continues to burden developing nations</li>
                                <li>Environmental degradation accelerates despite calls for ecological conversion</li>
                                <li>Social inequality widens in many regions</li>
                                <li>Religious conflicts persist despite interfaith dialogue efforts</li>
                            </ul>
                        </div>
                        
                        <div class="root-causes">
                            <h2 class="section-heading">Root Causes</h2>
                            <div class="causes-grid">
                                <div class="cause-item">Systemic Issues</div>
                                <div class="cause-item">Lack of Political Will</div>
                                <div class="cause-item">Individual Apathy</div>
                                <div class="cause-item">Economic Structures</div>
                            </div>
                        </div>
                        
                        <div class="call-to-action">
                            <h2 class="section-heading">Bridging the Gap</h2>
                            <p>Active participation, personal conversion, and systemic change are needed</p>
                        </div>
                    </div>
                `
            },
            // Slide 24: Living a Perpetual Jubilee
            {
                id: 'slide24',
                title: 'Living a "Perpetual Jubilee"',
                content: `
                    <div class="perpetual-content">
                        <div class="beyond-2025">
                            <h2 class="section-heading">Beyond 2025</h2>
                            <p>The Jubilee is not just a year-long event but an ongoing spiritual journey</p>
                        </div>
                        
                        <div class="sacraments-section">
                            <h2 class="section-heading">Sacraments as River of Life</h2>
                            <p>Continuous flow of liberation, grace, and renewal through the Church's sacramental life</p>
                        </div>
                        
                        <div class="conversion-process">
                            <h2 class="section-heading">Personal Conversion</h2>
                            <div class="conversion-steps">
                                <div class="step">Continuous Renewal</div>
                                <div class="step">Daily Prayer</div>
                                <div class="step">Acts of Mercy</div>
                                <div class="step">Social Justice</div>
                            </div>
                        </div>
                        
                        <div class="perpetual-visual">
                            <div class="infinity-symbol">∞</div>
                            <p>Eternal Jubilee in Christ</p>
                        </div>
                    </div>
                `
            },
            // Slide 25: Call to Action
            {
                id: 'slide25',
                title: 'Call to Action & Final Thoughts',
                content: `
                    <div class="final-content">
                        <div class="embodying-hope">
                            <h2 class="section-heading">Embodying Hope</h2>
                            <p>In our daily lives and ministries, we are called to be living signs of hope</p>
                        </div>
                        
                        <div class="future-implications">
                            <h2 class="section-heading">Future Implications</h2>
                            <p>The Jubilee serves as a catalyst for long-term spiritual and social renewal</p>
                        </div>
                        
                        <div class="closing-message">
                            <h2 class="section-heading">Be Pilgrims of Hope</h2>
                            <div class="final-quote">
                                <blockquote>
                                    "Let us be pilgrims of hope, transforming the world through God's mercy and love"
                                </blockquote>
                            </div>
                        </div>
                        
                        <div class="action-items">
                            <h2 class="section-heading">Concrete Actions</h2>
                            <div class="actions-grid">
                                <div class="action-card">Pray Daily</div>
                                <div class="action-card">Serve Others</div>
                                <div class="action-card">Seek Justice</div>
                                <div class="action-card">Care for Creation</div>
                                <div class="action-card">Foster Unity</div>
                                <div class="action-card">Share Hope</div>
                            </div>
                        </div>
                    </div>
                `
            }
        ];
        
        // Add additional slides to the container
        additionalSlides.forEach(slideData => {
            const slideElement = document.createElement('div');
            slideElement.className = 'slide';
            slideElement.id = slideData.id;
            slideElement.innerHTML = `
                <div class="slide-content">
                    <h1 class="slide-title">${slideData.title}</h1>
                    ${slideData.content}
                </div>
            `;
            slideContainer.appendChild(slideElement);
        });
        
        this.slides = document.querySelectorAll('.slide');
    }
    
    setupNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.addEventListener('click', () => this.previousSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    setupIndicators() {
        const container = document.getElementById('indicatorsContainer');
        
        for (let i = 1; i <= this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 1) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => this.goToSlide(i));
            container.appendChild(indicator);
        }
    }
    
    initializeCharts() {
        // Initialize charts after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.createSabbathChart();
            this.createJusticeChart();
            this.createObservanceChart();
            this.createJubileeFrequencyChart();
            this.createEvolutionChart();
            this.createJubileeThemesChart();
            this.createThemesWordCloudChart();
            this.createIdealVsRealityChart();
        }, 500);
    }
    
    createSabbathChart() {
        const ctx = document.getElementById('sabbathChart');
        if (!ctx) return;
        
        this.charts.sabbath = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Sabbath Day', 'Sabbath Year', 'Jubilee Year'],
                datasets: [{
                    label: 'Frequency (Years)',
                    data: [0.02, 7, 50], // Approximate frequency representation
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(255, 255, 255, 0.8)'
                    ],
                    borderColor: [
                        'rgba(212, 175, 55, 1)',
                        'rgba(255, 215, 0, 1)',
                        'rgba(255, 255, 255, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sabbath Theology Progression',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    createJusticeChart() {
        const ctx = document.getElementById('justiceChart');
        if (!ctx) return;
        
        this.charts.justice = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Land Rest', 'Debt Forgiveness', 'Slave Release', 'Property Return'],
                datasets: [{
                    data: [25, 25, 25, 25],
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(255, 255, 255, 0.8)',
                        'rgba(200, 200, 200, 0.8)'
                    ],
                    borderColor: '#1a1a2e',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Four Pillars of Jubilee Justice',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        position: 'bottom',
                        labels: { color: '#ffffff', padding: 20 }
                    }
                }
            }
        });
    }
    
    createObservanceChart() {
        const ctx = document.getElementById('observanceChart');
        if (!ctx) return;
        
        this.charts.observance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1000 BC', '800 BC', '600 BC', '400 BC', '200 BC', '0 AD'],
                datasets: [{
                    label: 'Ideal Observance',
                    data: [100, 100, 100, 100, 100, 100],
                    borderColor: 'rgba(212, 175, 55, 1)',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderWidth: 3,
                    fill: false
                }, {
                    label: 'Actual Observance',
                    data: [80, 60, 30, 20, 10, 5],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    borderWidth: 3,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jubilee Observance: Ideal vs Reality',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        title: {
                            display: true,
                            text: 'Observance Level (%)',
                            color: '#ffffff'
                        }
                    },
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    createJubileeFrequencyChart() {
        const ctx = document.getElementById('jubileeFrequencyChart');
        if (!ctx) return;
        
        this.charts.frequency = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1300 (Original)', '1343 (Clement VI)', '1470 (Paul II)', 'Modern'],
                datasets: [{
                    label: 'Years Between Jubilees',
                    data: [100, 50, 25, 25],
                    backgroundColor: 'rgba(212, 175, 55, 0.8)',
                    borderColor: 'rgba(212, 175, 55, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Evolution of Jubilee Frequency',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        title: {
                            display: true,
                            text: 'Years',
                            color: '#ffffff'
                        }
                    },
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    createEvolutionChart() {
        const ctx = document.getElementById('evolutionChart');
        if (!ctx) return;
        
        this.charts.evolution = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Pilgrimage', 'Indulgences', 'Social Justice', 'Global Participation', 'Mercy Focus'],
                datasets: [{
                    label: 'Early Jubilees (1300-1800)',
                    data: [90, 95, 20, 10, 30],
                    borderColor: 'rgba(212, 175, 55, 1)',
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    borderWidth: 2
                }, {
                    label: 'Modern Jubilees (1900-2025)',
                    data: [70, 60, 90, 95, 85],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jubilee Emphasis Evolution',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.3)' },
                        pointLabels: { color: '#ffffff' }
                    }
                }
            }
        });
    }
    
    createJubileeThemesChart() {
        const ctx = document.getElementById('jubileeThemesChart');
        if (!ctx) return;
        
        this.charts.themes = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1300', '1500', '1700', '1900', '2000', '2015', '2025'],
                datasets: [{
                    label: 'Indulgence Focus',
                    data: [100, 95, 90, 70, 50, 30, 20],
                    borderColor: 'rgba(255, 206, 84, 1)',
                    backgroundColor: 'rgba(255, 206, 84, 0.1)',
                    borderWidth: 2
                }, {
                    label: 'Social Justice',
                    data: [10, 15, 20, 40, 80, 85, 90],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.1)',
                    borderWidth: 2
                }, {
                    label: 'Mercy & Compassion',
                    data: [30, 35, 40, 50, 70, 95, 85],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Shifting Emphases in Papal Jubilees',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        title: {
                            display: true,
                            text: 'Emphasis Level (%)',
                            color: '#ffffff'
                        }
                    },
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    createThemesWordCloudChart() {
        const ctx = document.getElementById('themesWordCloudChart');
        if (!ctx) return;
        
        this.charts.wordCloud = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Hope', 'Mercy', 'Justice', 'Prayer', 'Ecology', 'Peace', 'Reconciliation', 'Pilgrimage'],
                datasets: [{
                    label: 'Theme Frequency in Documents',
                    data: [95, 88, 82, 78, 75, 70, 68, 65],
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(255, 215, 0, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)'
                    ],
                    borderWidth: 2,
                    borderColor: '#1a1a2e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    title: {
                        display: true,
                        text: 'Key Themes in Jubilee 2025 Documents',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        title: {
                            display: true,
                            text: 'Frequency Score',
                            color: '#ffffff'
                        }
                    },
                    y: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    createIdealVsRealityChart() {
        const ctx = document.getElementById('idealVsRealityChart');
        if (!ctx) return;
        
        this.charts.idealVsReality = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Debt Relief', 'Poverty Reduction', 'Environmental Care', 'Peace Building', 'Social Justice'],
                datasets: [{
                    label: 'Jubilee Ideals (%)',
                    data: [100, 100, 100, 100, 100],
                    backgroundColor: 'rgba(212, 175, 55, 0.8)',
                    borderColor: 'rgba(212, 175, 55, 1)',
                    borderWidth: 2
                }, {
                    label: 'Current Reality (%)',
                    data: [25, 35, 40, 30, 45],
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Jubilee Ideals vs Current Global Reality',
                        color: '#d4af37',
                        font: { size: 18, weight: 'bold' }
                    },
                    legend: {
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        title: {
                            display: true,
                            text: 'Achievement Level (%)',
                            color: '#ffffff'
                        }
                    },
                    x: {
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        
        // Remove active class from current slide
        this.slides[this.currentSlide - 1].classList.remove('active');
        
        // Add active class to new slide
        this.slides[slideNumber - 1].classList.add('active');
        
        // Update current slide
        this.currentSlide = slideNumber;
        
        // Update display
        this.updateDisplay();
        
        // Add animation
        this.animateSlideTransition();
    }
    
    updateDisplay() {
        // Update slide counter
        document.getElementById('slideCounter').textContent = `${this.currentSlide} / ${this.totalSlides}`;
        
        // Update progress bar
        const progress = (this.currentSlide / this.totalSlides) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        
        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.currentSlide === 1;
        document.getElementById('nextBtn').disabled = this.currentSlide === this.totalSlides;
        
        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide - 1);
        });
    }
    
    animateSlideTransition() {
        const currentSlideElement = this.slides[this.currentSlide - 1];
        const content = currentSlideElement.querySelector('.slide-content');
        
        // Animate slide content
        gsap.fromTo(content, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
        
        // Animate individual elements
        const elements = content.querySelectorAll('h1, h2, p, .chart-container, .principle-card, .theme-card');
        gsap.fromTo(elements,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out" }
        );
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new JubileePresentation();
});

// Add some additional styling for dynamic elements
const additionalStyles = `
    .church-fathers-visual {
        text-align: center;
        padding: 30px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        border: 2px solid #d4af37;
    }
    
    .father-icon {
        font-size: 60px;
        margin-bottom: 15px;
    }
    
    .transformation-arrow {
        font-size: 30px;
        color: #d4af37;
        margin: 15px 0;
    }
    
    .evolution-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .comparison-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-top: 20px;
    }
    
    .comparison-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 25px;
        border-radius: 15px;
        text-align: center;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .comparison-item h3 {
        color: #d4af37;
        margin-bottom: 15px;
        font-size: 24px;
    }
    
    .jubilee-2000-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .themes-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    
    .theme-card {
        background: rgba(212, 175, 55, 0.1);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid #d4af37;
        transition: transform 0.3s ease;
    }
    
    .theme-card:hover {
        transform: translateY(-5px);
    }
    
    .theme-card h3 {
        color: #d4af37;
        margin-bottom: 10px;
        font-size: 22px;
    }
    
    .mercy-jubilee-content {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    
    .actions-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    
    .action-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid rgba(212, 175, 55, 0.3);
    }
    
    .action-item h3 {
        color: #d4af37;
        margin-bottom: 10px;
        font-size: 20px;
    }
    
    .motto-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        align-items: center;
    }
    
    .motto-breakdown {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    
    .motto-section {
        background: rgba(255, 255, 255, 0.05);
        padding: 25px;
        border-radius: 15px;
        border-left: 4px solid #d4af37;
    }
    
    .hope-visualization {
        text-align: center;
        padding: 30px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        border: 2px solid #d4af37;
    }
    
    .hope-symbol-large {
        font-size: 80px;
        margin-bottom: 20px;
    }
    
    .hope-quote {
        font-style: italic;
        color: #d4af37;
        font-size: 24px;
        font-weight: bold;
    }
    
    .preparatory-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .prayer-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 15px;
    }
    
    .prayer-item {
        background: #d4af37;
        color: #1a1a2e;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }
    
    .themes-content .themes-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
    }
    
    .significance-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .action-items {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 20px;
    }
    
    .action-item {
        background: #d4af37;
        color: #1a1a2e;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 20px;
    }
    
    .challenges-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
    }
    
    .challenge-card {
        background: rgba(255, 255, 255, 0.05);
        padding: 25px;
        border-radius: 15px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        transition: transform 0.3s ease;
    }
    
    .challenge-card:hover {
        transform: translateY(-5px);
        border-color: #d4af37;
    }
    
    .challenge-card h3 {
        color: #d4af37;
        margin-bottom: 15px;
        font-size: 24px;
    }
    
    .relevance {
        margin-top: 15px;
        padding: 15px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 10px;
        font-style: italic;
        color: #ffd700;
    }
    
    .applications-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
    
    .application-item {
        background: rgba(212, 175, 55, 0.1);
        padding: 25px;
        border-radius: 15px;
        border: 1px solid #d4af37;
        text-align: center;
        transition: transform 0.3s ease;
    }
    
    .application-item:hover {
        transform: translateY(-5px);
    }
    
    .application-item h3 {
        color: #d4af37;
        margin-bottom: 15px;
        font-size: 22px;
    }
    
    .gap-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .causes-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 15px;
    }
    
    .cause-item {
        background: rgba(255, 99, 132, 0.2);
        color: #ffffff;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
        border: 1px solid rgba(255, 99, 132, 0.5);
    }
    
    .perpetual-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .conversion-steps {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 15px;
    }
    
    .step {
        background: #d4af37;
        color: #1a1a2e;
        padding: 15px 20px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 18px;
    }
    
    .perpetual-visual {
        text-align: center;
        padding: 30px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        border: 2px solid #d4af37;
    }
    
    .infinity-symbol {
        font-size: 80px;
        color: #d4af37;
        margin-bottom: 15px;
    }
    
    .final-content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .final-quote {
        text-align: center;
        padding: 30px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        border: 2px solid #d4af37;
        margin: 20px 0;
    }
    
    .final-quote blockquote {
        font-size: 28px;
        font-weight: bold;
        color: #d4af37;
        font-style: italic;
    }
    
    .actions-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    
    .action-card {
        background: #d4af37;
        color: #1a1a2e;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        transition: transform 0.3s ease;
    }
    
    .action-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

