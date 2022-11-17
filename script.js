let Countdown = document.getElementById("btn");

Countdown.addEventListener("click", function () {
	
	Countdown.innerHTML = 10;

	setTimeout(function () {
		Countdown.innerHTML = 9;

		setTimeout(function () {
			Countdown.innerHTML = 8;

			setTimeout(function () {
				Countdown.innerHTML = 7;

				setTimeout(function () {
					Countdown.innerHTML = 6;

					setTimeout(function () {
						Countdown.innerHTML = 5;

						setTimeout(function () {
							Countdown.innerHTML = 4;

							setTimeout(function () {
								Countdown.innerHTML = 3;

								setTimeout(function () {
									Countdown.innerHTML = 2;

									setTimeout(function () {
										Countdown.innerHTML = 1;

										setTimeout(function () {	
																				
											Countdown.innerHTML = "Happy Independence Day";
												
										}, 3000);
									}, 2000);
								}, 3000);
							}, 2000);
						}, 2000);
					}, 1000);
				}, 2000);
			}, 3000);
		}, 2000);
	}, 2000);
},1000);