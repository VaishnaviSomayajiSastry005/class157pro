AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "avengers",
          title: "Avengers",
          url: "./assets/thumbnails/avengers.jpg",
        },
        {
          id: "tinkle",
          title: "Tinkle",
          url: "./assets/thumbnails/tinkle.jpg",
        },
  
        {
          id: "they-called-us-enemy",
          title: "They called us Enemy",
          url: "./assets/thumbnails/they_called_us_enemy.jpg",
        },
        {
          id: "tintin",
          title: "Tintin",
          url: "./assets/thumbnails/tintin.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position, item.id);
        
        // Thumbnail Element
        const thumbnails=this.createThumbnail(item);
        borderEl.appendChild(thumbnails);
  
        // Title Text Element
        const titleEl=this.createTitleEl(position,item);
        borderEl.appendChild(titleEl);
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEL = document.createElement("a-entity");
      entityEL.setAttribute("id",id);
      entityEL.setAttribute("visible",true);
      entityEL.setAttribute("geometry", {
        primitive:"plane",
        radiusInner:15,
        radiusOuter:25
      });
      entityEL.setAttribute("position", position);
      entityEL.setAttribute("material",{
        color:"#0077cc",
        opacity:1,
      });
      entityEL.setAttribute("cursor-listener", {});

      return entityEL
    },
    createTitleEl:function(position,item){
      const entityEL=document.createElement("a-entity")
      entityEL.setAttribute("text",{
        font:"exo2bold",
        align:"centre",
        width:70,
        color:"#e65100",
        value:item.title
      })
      const Elposition=position;
      Elposition.y=-20
      entityEL.setAttribute("position",Elposition)
      entityEL.setAttribute("visible",true)
      return entityEL
    },
    createThumbnail:function(item){
      const entityEL=document.createElement("a-entity")
      entityEL.setAttribute("visible",true)
      entityEL.setAttribute("geometry",{
        primitive:"plane",
        width:15,
        height:20,
      })
      entityEL.setAttribute("material",{src:item.url})
      return entityEL  
    }
  });
  