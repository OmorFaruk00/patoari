export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true, 
  app:{
    head:{
      link:[
        {rel:"stylesheet",href:"css/bootstrap.min.css"},
      ],
      script:[
        {src:"js/bootstrap.min.js", body:true},
        {src:"js/popper.min.js", body:true},
        {src:"js/bundle.min.js", body:true},
        {src:"js/custom.js", body:true},
      ]
    }
    
  },
  
})
