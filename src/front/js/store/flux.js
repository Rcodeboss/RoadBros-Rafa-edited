const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				id: "",
				type: "",
				firstName: "",
				lastName: "",
				picture: "",
				city: "",
				email: "",
				phone: "",
				licensePicture: "",
				RegistrationPicture: "",
				InsurancePicture: "",
				carModel: "",
				carMake: "",
				carYear: "",
				rating: ""
			},
			listOfRequests: [
				{
					picture: "fill up wit stuff",
					firstName: "",
					lastName: "",
					city: "",
					service: "",
					carModel: "",
					carMake: "",
					carYear: ""
				},
				{
					picture: "",
					firstName: "",
					lastName: "",
					city: "",
					service: "",
					carModel: "",
					carMake: "",
					carYear: ""
				},
				{
					picture: "",
					firstName: "",
					lastName: "",
					city: "",
					service: "",
					carModel: "",
					carMake: "",
					carYear: ""
				}
			]
		},
		actions: {}
	};
};

export default getState;
