const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");
const frame3 = document.getElementById("frame3");
const frame4 = document.getElementById("frame4");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

const frames = ['frame1', 'frame2', 'frame3','frame4']
const images = ['img1','img2','img3','img4']
const lines = ['line1','line2','line3','line4','line5']

var main = document.getElementById("main")

// for Image 1
main.addEventListener("mousemove", function(dets){
    
    if (dets.x < 500 && dets.y < 500) {
        images.forEach((id, index) => {
            if(id != 0){
                gsap.to(`#${id}`, {
                    opacity:0,
                    zIndex:2,
                });
            }
        });

       
        line1.style.color = "#212121"
        line2.style.color = "#212121"
        line3.style.color = "#212121"
        line4.style.color = "#212121"
        line5.style.color = "#212121"
        lines.forEach((id, index) => {   
                gsap.to(`#${id}`, {
                    duration: 0.1,
                    color: "rgba(255, 0, 0, 0)",
                    ease: "power1.inOut",
                    zIndex:0,
                    delay: index * 0.2 
                });
        });
        
        
        
        gsap.to(img1, {
            opacity:1,
            zIndex:50,
            top:-40,
            left:-20,
            x: dets.x,
            y: dets.y,
            duration: 0.1,
            
            });
        gsap.to(frame1,{
            opacity:0,
        })
        
    }
    
    else {
        gsap.to(frame1,{
            opacity:1,
        })
            gsap.to(img1, { 
                zIndex:3,
                y:245,
                x:142,
                duration: 0.1 
            });
            lines.forEach((id, index) => {   
                gsap.to(`#${id}`, {
                    ease: "power1.inOut",
                    zIndex:50,
                });
            });
            images.forEach((id, index) => {
                    gsap.to(`#${id}`, {
                        opacity:1,
                        ease: "power1.inOut",
                        zIndex:3,
                    });
                
            });
        }


    // Second image
    if(dets.x > 700 && dets.x < 1920 && dets.y < 500){
        images.forEach((id, index) => {
            if(id != 2){
                gsap.to(`#${id}`, {
                    opacity:0,
                    zIndex:2,
                });
            }
        });

       
        line1.style.color = "#212121"
        line2.style.color = "#212121"
        line3.style.color = "#212121"
        line4.style.color = "#212121"
        line5.style.color = "#212121"
        lines.forEach((id, index) => {
                gsap.to(`#${id}`, {
                    zIndex:0,
                });
        });
        
        
        
        gsap.to(img3, {
            opacity:1,
            zIndex:50,
            
            x: dets.x - (2.5)*img3.offsetWidth,  
            y: dets.y - img3.offsetHeight,  
            duration: 0.3,
            opacity:1
            });
        gsap.to(frame3,{
            opacity:0,
        })
    }
    
    else {
        gsap.to(frame3,{
            opacity:1,
        })
        gsap.to(img3, { 
            zIndex:3,
            y:0,
            x:0,
            duration: 0.1 
        });
        lines.forEach((id, index) => {
            
                gsap.to(`#${id}`, {
                    duration: 0.1,
                    ease: "power1.inOut",
                    zIndex:50,
                    
                });
            
        });
        images.forEach((id, index) => {
           
                gsap.to(`#${id}`, {
                    opacity:1,
                    ease: "power1.inOut",
                    zIndex:3,
                });
            
        });
    }   


    // Third img img2

    if(dets.x < 300 && dets.y > 800){
    
        images.forEach((id, index) => {
            if(id != 1){
                gsap.to(`#${id}`, {
                    opacity:0,
                    zIndex:2,
                });
            }
        });

       
        line1.style.color = "#212121"
        line2.style.color = "#212121"
        line3.style.color = "#212121"
        line4.style.color = "#212121"
        line5.style.color = "#212121"
        lines.forEach((id, index) => {
                gsap.to(`#${id}`, {
                    zIndex:0,
                });
        });
        
        
        
        gsap.to(img2, {
            opacity:1,
            zIndex:50,
            
            x: dets.x - img2.offsetWidth/2,  
            y: dets.y - img2.offsetHeight/2,  
            duration: 0.3,
            
            });
        gsap.to(frame2,{
            opacity:0,
        })
    }
    
    else {
        gsap.to(frame2,{
            opacity:1,
        })
        gsap.to(img2, { 
            zIndex:3,
            y:0,
            x:0,
            duration: 0.1 
        });

        lines.forEach((id, index) => {
            
                gsap.to(`#${id}`, {
                    
                    ease: "power1.inOut",
                    zIndex:50,
                    
                });
            
        });
        images.forEach((id, index) => {
           
                gsap.to(`#${id}`, {
                    opacity:1,
                    ease: "power1.inOut",
                    zIndex:3,
                });
            
        });
    }     

})







// var tl = gsap.timeline()
images.forEach((id, index) => {
    gsap.from(`#${id}`, {
        duration: 0.5,
        opacity:0,
        ease: "power1.inOut",
        zIndex:3,
        
    });
    
});
gsap.from("#line1 span",{
    opacity:0,
    y:70,
    duration:0.6,
})
gsap.from("#line2 span",{
    opacity:0,
    y:100,
    duration:0.5
})
gsap.from("#line3 span",{
    opacity:0,
    y:100,
    duration:0.6
})
gsap.from("#line4 span",{
    opacity:0,
    y:100,
    duration:0.6
})
gsap.from("#line5 span",{
    opacity:0,
    y:100,
    duration:0.7
})

