import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSPlugin, CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  compteur = 0;
  ngOnInit(): void {}
  suivant() {
    const TL = gsap.timeline();
    if (this.compteur === 0) {
      TL
      .to('.overlay_1', {
        background: 'rgb(243, 47, 80)',
        duration: 0.1,
      })
        .to(
          '.overlay_1',
          {
            scale: 400,
            duration: 1,
            delay: 0.1,
            ease: 'since.out',
          },
          '<'
        )
        .to(
          '.super-container',
          {
            color: '#fff',
            duration: 0.3,
            delay: 0.2,
          },
          '<-.3'
        )
        .to(
          '.img_2',
          {
            y: '200px',
            x: '-250px',
            scale: 1,
            duration: 0.6,
            delay: 0.2,
            ease: 'Sine.easeInOut',
          },
          '<'
        )
        .to(
          '.blur_2',
          {
            display: 'none',
            duration: 0.1,
          },
          '<'
        )
        .to('.img_1',{
          display: 'block',
          duration: .3,
        },"<")
        .to('.row_title',{
          x: '-100%',
          duration: .3,
        },"<")
        .to(
          '.super-container',
          {
            background: 'rgb(243, 47, 80)',
            duration: 0.3,
            delay: 0.2,
          },
          '<'
        )
        this.compteur++
    }else{
      if(this.compteur === 1){
        TL
        .to('.overlay_2', {
          background: '#D9E2ED',
        })
          .to(
            '.overlay_2',
            {
              scale: 400,
              duration: 1,
              delay: 0.1,
              ease: 'Sine.Out',
            },
            '<'
          )
          .to(
            '.super-container',
            {
              color: '#000',
              duration: 0.3,
              delay: 0.2,
            },
            '<-.3'
          )
          .to(
            '.img_2',
            {
              y: '500px',
              x: '25px',
              scale: .5,
              duration: 0.6,
              ease: 'Sine.easeOut',
            },
            '<'
          )
          .to(
            '.blur_2',
            {
              display: 'block',
              duration: 0.1,
            },
            '<'
          )
          .to(
            '.img_1',
            {
              y: '200px',
              x: '-250px',
              scale: 1,
              delay: .1,
              duration: 0.6,
              ease: 'Sine.easeOut',
            },
            '<-.1'
          )
          .to(
            '.blur_1',
            {
              display: 'none',
              duration: 0.1,
            },
            '<'
          )
          .to('.img_3',{
            display: 'block',
            duration: .1,
          },"<")
          .to('.row_title',{
            x: '-200%',
            duration: .3,
          },"<")
          .to(
            '.super-container',
            {
              background: '#D9E2ED',
              duration: 0.3,
              delay: 0.2,
            }
          )

          this.compteur++
      }else{
        if(this.compteur == 2){
          TL
          .to('.overlay_3', {
            background: '#444442',
          })
            .to(
              '.overlay_3',
              {
                scale: 400,
                duration: 1,
                delay: 0.1,
                ease: 'Sine.Out',
              },
              '<'
            )
            .to(
              '.super-container',
              {
                color: '#FFF',
                duration: 0.3,
                delay: 0.2,
              },
              '<-.3'
            )
            .to(
              '.img_2',
              {
                display: 'none',
                duration: 0.4,
                ease: 'Sine.easeOut',
              },
              '<-.1'
            )
            .to(
              '.blur_2',
              {
                display: 'none',
                duration: 0.1,
              },
              '<'
            )
            .to(
              '.img_1',
              {
                y: '500px',
                x: '25px',
                scale: .5,
                duration: 0.6,
                ease: 'Sine.easeOut',
              },
              '<'
            )
            .to(
              '.blur_1',
              {
                display: 'block',
                duration: 0.1,
              },
              '<'
            )
            .to(
              '.img_3',
              {
                y: '200px',
                x: '-250px',
                scale: 1,
                delay: .1,
                duration: 0.6,
                ease: 'Sine.easeOut',
              },
              '<-.1'
            )
            .to(
              '.blur_3',
              {
                display: 'none',
                duration: 0.1,
              },
              '<'
            )
            .to('.row_title',{
              x: '-300%',
              duration: .3,
            },"<")
            this.compteur++
        }
      }
    }
  }
  precedent() {
    const TL = gsap.timeline();
    if(this.compteur === 1){
      TL 
      .to(
        '.overlay_1',
        {
          scale: 0,
          duration: .8,
          ease: 'Sine.in',
        },
        '<'
      )
      .to(
        '.super-container',
        {
          background: 'transparent',
          duration: 0.3,
          delay: 0.2,
        },
        '<'
      )
      .to(
        '.super-container',
        {
          color: '#000',
          duration: 0.3,
          delay: 0.2,
        },
        '<-.3'
      )
      .to(
        '.img_2',
        {
          y: '*',
          x: '*',
          scale: .5,
          duration: 0.6,
          ease: 'Sine.easeOut',
        },
        '<'
      )
      .to(
        '.blur_2',
        {
          display: 'block',
          duration: 0.5,
        },
        '<'
      )
      .to('.img_1',{
        display: 'none',
        duration: .3,
      },"<")
      .to('.row_title',{
        x: '0',
        duration: .3,
      },"<")
      this.compteur--
    }else{
      if(this.compteur === 2){
        TL
        .to(
          '.overlay_2',
          {
            scale: 0,
            duration: .7,
            ease: 'Sine.Out',
          },
          '<'
        )
        .to(
          '.super-container',
          {
            background: 'transparent',
            duration: 0.3,
          },
          '<'
        )
        .to(
          '.super-container',
          {
            color: '#FFF',
            duration: 0.3,
          },
          '<-.3'
        )
        .fromTo(
          '.img_2',
          {
            y: '500px',
            x: '25px',
            delay: .5
          },
          {
            y: '200px',
            x: '-250px',
            scale: 1,
            duration: 1,
            ease: 'Sine.easeIn',
          },
          '<'
        )
        .to(
          '.blur_2',
          {
            display: 'none',
            duration: 0.1,
          },
          '<'
        )
        .fromTo(
          '.img_1',
          {
            y: '200px',
            x: '-250px',
            delay:.5
          },
          {
            y: '0',
            x: '0',
            scale: .5,
            duration: 1,
            ease: 'Sine.easeIn',
          },
          '<'
        )
        .to(
          '.blur_1',
          {
            display: 'block',
            duration: 0.1,
          },
          '<'
        )
        .to('.img_3',{
          display: 'none',
          duration: .1,
          delay: 0.2
        },"<")
        .to('.row_title',{
          x: '-100%',
          duration: .3,
        },"<")
        this.compteur--
      }else{
        if(this.compteur === 3){
          TL
          .to(
            '.overlay_3',
            {
              scale: 0,
              duration: .7,
              ease: 'Sine.Out',
            },
            '<'
          )
          .to(
            '.super-container',
            {
              background: 'transparent',
              duration: 0.3,
            },
            '<'
          )
          .to(
            '.super-container',
            {
              color: '#000',
              duration: 0.3,
            },
            '<-.3'
          )
          .fromTo(
            '.img_1',
            {
              y: '500px',
              x: '25px',
              delay: .5
            },
            {
              y: '200px',
              x: '-250px',
              scale: 1,
              duration: 1,
              ease: 'Sine.easeIn',
            },
            '<'
          )
          .to(
            '.blur_2',
            {
              display: 'block',
              duration: 0.1,
            },
            '<'
          )
          .fromTo(
            '.img_3',
            {
              y: '200px',
              x: '-250px',
              delay:.5
            },
            {
              y: '0',
              x: '0',
              scale: .5,
              duration: 1,
              ease: 'Sine.easeIn',
            },
            '<'
          )
          .to(
            '.blur_1',
            {
              display: 'none',
              duration: 0.1,
            },
            '<'
          )
          .to(
            '.blur_3',
            {
              display: 'block',
              duration: 0.1,
            },
            '<'
          )
          .to('.img_2',{
            display: 'block',
            duration: .1,
            delay: 0.2
          },"<")
          .to('.row_title',{
            x: '-200%',
            duration: .3,
          },"<")
        }
        this.compteur--
      }
    }
  }
}
