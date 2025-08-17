import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  menuOpen = false;
   education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Mumbai University",
      year: "2018 - 2022",
      details: "Focused on Java, Data Structures, Algorithms, and Web Development."
    }];
  email='priyalvyas.work@gmail.com';
  mailto='mailto:priyalvyas.work@gmail.com';
medium='https://medium.com/@priyal84vyas';
backendSkills: string[] = [
  "Java (Core, Collections, Streams, Multithreading)",
  "Spring Framework (Spring Boot, Spring MVC, Spring Data JPA)",
  "RESTful APIs & Microservices",
  "Hibernate / JPA",
  "SQL & Databases (PostgreSQL, MySQL, Oracle)",
  "Message Brokers: Kafka",
  "Unit Testing (JUnit, Mockito)"
];

frontendSkills: string[] = [
  "Angular",
  "TypeScript",
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)"
];

otherSkills: string[] = [
  "Version Control: Git, GitHub/GitLab",
  "Build Tools: Maven",
  "Cloud: AWS EC2, S3, RDS"
];

  // Typing effect state
  typedText = '';
  private phrases = [
    'Java Full-Stack Developer',
    'Building Microservices & Angular UIs'
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;

  // Speeds (ms)
  private typeSpeed = 90;
  private deleteSpeed = 55;
  private holdAtEnd = 1200;
  private holdAtStart = 500;

  ngOnInit(): void {
    this.typeLoop();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private typeLoop(): void {
    const current = this.phrases[this.phraseIndex];

    if (!this.deleting) {
      // typing forward
      if (this.charIndex < current.length) {
        this.typedText += current.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typeLoop(), this.typeSpeed);
      } else {
        // reached end, hold, then start deleting
        this.deleting = true;
        setTimeout(() => this.typeLoop(), this.holdAtEnd);
      }
    } else {
      // deleting
      if (this.charIndex > 0) {
        this.typedText = current.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.typeLoop(), this.deleteSpeed);
      } else {
        // finished deleting, move to next phrase, hold a bit
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        setTimeout(() => this.typeLoop(), this.holdAtStart);
      }
    }
  }
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const sections = this.el.nativeElement.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach((section: Element) => observer.observe(section));
  }
}