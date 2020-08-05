// Credit goes to Nicolo Carpignoli. Can be found here https://medium.com/chialab-open-source/how-to-handle-click-events-on-ar-js-58fcacb77c4


AFRAME.registerComponent('click-event', {

  init: function () {

    var mrk = this.el;

    window.mrk = mrk;

    var mrkId = mrk.id;
    const aMrk = document.querySelector("#"+mrkId);
    const aEntity = document.querySelector("#"+mrk.dataset.entity);


      aMarker.addEventListener('click', (ev) => {
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl, //event details from object intersected on press
          mrkValue = mrk.attributes.value.nodeValue; //returns value attribute

          const checkMrk = aEntity && intersectedElement === aEntity && ev.detail.intersectedEl.id === mrk.dataset.entity;

          //if the marker object is pressed
          // Couldn't get this to work so has been left blank due to code that was tried not working
          // Will come back at a later  date to try and get this to work
          if (checkMrk) {


          }
      });

        //MARKER FOUND Event

        mrk.addEventListener('markerFound', function() {

      console.log('markerFound', mrkId);

      });


      //MARKER LOST

      mrk.addEventListener('markerLost', function() {

      if(markerId === 'marker1'){

       console.log('markerLost', markerId);

     }});

    }
  });
