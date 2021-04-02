// yamaps
		ymaps.ready(init);
		function init(){
			console.log('map init!');
			var myMap = new ymaps.Map("contacts-map", {
				center: [53.195042, 45.018316],
				zoom: 7
       	// controls: ['zoomControl'], //оставляем только масштабирование
       	// behaviors: ['drag'] //оставляем только поведение drag
      });

		  // одиночный маркер 
	      //   var placemark = new ymaps.Placemark(myMap.getCenter(), {
	      //   		hintContent: null,
	      //       balloonContent: null
	      //   	},
	      //   	{
	      //   		// стилизация собственной метки
	      //   	 iconLayout: 'default#image',
						 // iconImageHref: 'path-to-image',
						 //  iconImageSize: [50, 50],
						 //   iconImageOffset: [-25, -50]

	      // 	});

	        // myMap.geoObjects.add(placemark);
	}
// END yamaps