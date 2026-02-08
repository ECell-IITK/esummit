import{r as h,u as x,a as m,j as e,m as n}from"./index-BCnq8Zon.js";import{b as g}from"./backg2-D-DbP4Uq.js";const p="/esummit/assets/aman-gupta_sumit-STCXBF3u.png",f="/esummit/assets/mukeshBansalSmmit-BZFv5PjB.png",b="/esummit/assets/tharunSummit-C3PuzXyx.png",v="/esummit/assets/Rahul-Garg-B6w9NJrJ.png",w="/esummit/assets/AshneerGroverSummit-CF4d0AKu.png",j="/esummit/assets/VjchauhanSummit-H5IRGAPJ.png",N="/esummit/assets/HimeeshM-DLBtHbsa.png",S="/esummit/assets/saurabh-dwivedi-1-Cmn16own.png",k="/esummit/assets/sanjeev-bikhchandantn-STdsVDqV.png",y="/esummit/assets/kunalshah-CAQB3q8i.png",B="/esummit/assets/ishanSharma-COOxtvxg.png",F="/esummit/assets/SandeepJain-DUkrJOBw.png",I="/esummit/assets/amitAgrawalsummit-DBUpIGNg.png";function d({children:a,direction:s="left",duration:r=40}){return e.jsx("div",{className:"relative w-full",children:e.jsx(n.div,{className:"flex w-max gap-3 overflow-visible",animate:{x:s==="left"?["0%","-50%"]:["-50%","0%"]},transition:{duration:r,ease:"linear",repeat:1/0},style:{willChange:"transform"},children:a})})}function G(){const a=h.useRef(null),{scrollYProgress:s}=x({target:a,offset:["start end","center center"]}),r=m(s,[0,1],[0,-380]),u=m(s,[0,1],[0,380]),o=[{name:"Aman Gupta",role:"Founder, Boat",img:p},{name:"Mukesh Bansal",role:"Founder, Myntra",img:f},{name:"Ashneer Grover",role:"Founder, BharatPe",img:w},{name:"Rahul Garg",role:"Founder, Moglix",img:v},{name:"Sanjeev Bikhchandani",role:"Co-Founder, Info Edge",img:k},{name:"Kunal Shah",role:"Founder, Cred",img:y},{name:"Amit Agrawal",role:"Founder, NoBroker",img:I}],l=[{name:"Vijender Chauhan",role:"Interviewer",img:j},{name:"Tharun Naik",role:"Creator",img:b},{name:"Himesh Madaan",role:"Motivational Speaker",img:N},{name:"Saurabh Dwivedi",role:"Journalist, Lallantop",img:S},{name:"Sandeep Jain",role:"Founder, GFG",img:F},{name:"Ishan Sharma",role:"Podcaster & Founder",img:B}];return e.jsxs("section",{id:"speakers",className:`\r
        relative\r
        pt-16 pb-12\r
        overflow-hidden\r
      `,children:[e.jsx("div",{className:" absolute inset-0 z-[-2] bg-cover bg-center scale-105",style:{backgroundImage:`url(${g})`}}),e.jsx("div",{className:`\r
          absolute top-0 left-0\r
          w-full h-40\r
          bg-gradient-to-t\r
          from-transparent\r
         via-[#031e1b]/80\r
         to-[#031e1b]\r
       `}),e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-gradient-to-b\r
         from-black/10\r
         via-black/40\r
         to-black/60\r
         z-[-1]\r
        `}),e.jsx("div",{ref:a,className:"relative mb-16 overflow-hidden",children:e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsxs("div",{className:"hidden md:flex items-center",children:[e.jsx(n.div,{className:"h-[2px] bg-gradient-to-l from-[#6fe9dc] to-transparent",initial:{width:0},whileInView:{width:"40vw"},transition:{duration:1.1,ease:"easeOut"},viewport:{once:!0}}),e.jsx(n.div,{style:{x:r},className:"w-2.5 h-2.5 rounded-full bg-[#6fe9dc]",animate:{boxShadow:["0 0 6px rgba(111,233,220,0.5)","0 0 14px rgba(111,233,220,0.9)","0 0 6px rgba(111,233,220,0.5)"]},transition:{duration:1.6,repeat:1/0}})]}),e.jsx("h1",{className:`\r
                shrink-0\r
                text-3xl md:text-5xl\r
                font-black\r
                font-[Archivo_Black]\r
                tracking-[0.04em]\r
                uppercase\r
                bg-gradient-to-r\r
               from-[#24BEB0]\r
               via-[#6fe9dc]\r
               to-white\r
                bg-clip-text\r
                text-transparent\r
                text-center\r
                whitespace-nowrap\r
                `,children:"PAST SPEAKERS"}),e.jsxs("div",{className:"hidden md:flex items-center",children:[e.jsx(n.div,{style:{x:u},className:"w-2.5 h-2.5 rounded-full bg-[#6fe9dc]",animate:{boxShadow:["0 0 6px rgba(111,233,220,0.5)","0 0 14px rgba(111,233,220,0.9)","0 0 6px rgba(111,233,220,0.5)"]},transition:{duration:1.6,repeat:1/0}}),e.jsx(n.div,{className:"h-[2px] bg-gradient-to-r from-[#6fe9dc] to-transparent",initial:{width:0},whileInView:{width:"40vw"},transition:{duration:1,ease:"easeOut",delay:.05},viewport:{once:!0}})]})]})}),e.jsx("div",{className:"relative space-y-5 ",children:e.jsx("div",{children:e.jsxs("div",{className:"relative space-y-5",children:[e.jsx(d,{direction:"left",duration:42,children:[...o,...o].map((t,i)=>e.jsx(c,{speaker:t},`founder-${i}`))}),e.jsx(d,{direction:"right",duration:48,children:[...l,...l].map((t,i)=>e.jsx(c,{speaker:t},`creator-${i}`))})]})})})]})}function c({speaker:a}){return e.jsxs(n.div,{whileHover:{scale:1.05,y:-2,zIndex:20,boxShadow:"0 0 70px rgba(133,223,212,0.45)"},transition:{type:"spring",stiffness:180},className:`\r
        relative\r
        w-[180px] h-[240px] sm:w-[200px] sm:h-[260px] md:w-[220px] md:h-[280px]\r
        rounded-2xl\r
        bg-gradient-to-b from-[#1b1f1f] to-[#0e1111]\r
        border border-white/100\r
        overflow-visible\r
        flex flex-col items-center justify-end\r
        flex-shrink-0\r
      `,children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,223,212,0.25),transparent_65%)]"}),e.jsx("div",{className:"absolute top-6 w-[185px] h-[161px] md:w-[220px] md:h-[201px] flex justify-center",children:e.jsx("img",{src:a.img,alt:a.name,className:`\r
            max-w-full\r
            max-h-full\r
            object-contain\r
            drop-shadow-2xl\r
          `,loading:"lazy",decoding:"async"})}),e.jsx("div",{className:" h-px w-full bg-white/80"}),e.jsxs("div",{className:"relative z-10 text-center mb-3",children:[e.jsx("h3",{className:"text-base font-semibold text-[#85dfd4]",children:a.name}),e.jsx("p",{className:"text-xs text-white/80 tracking-widest uppercase",children:a.role})]})]})}export{G as default};
