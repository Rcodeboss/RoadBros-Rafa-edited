const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				id: "",
				type: "",
				fullName: "",
				picture: "",
				city: "",
				email: "",
				phone: "",
				licensePicture: "",
				RegistrationPicture: "",
				InsurancePicture: "",
				vehicleModel: "",
				vehicleMake: "",
				vehicleYear: "",
				rating: ""
			},
			listOfRequests: [
				{
					picture: "",
					fullName: "Jenniffer Medina",
					city: "",
					service: "",
					vehicleModel: "",
					vehicleMake: "",
					vehicleYear: ""
				},
				{
					picture: "",
					fullName: "Gloria Perez",
					city: "",
					service: "",
					vehicleModel: "",
					vehicleMake: "",
					vehicleYear: ""
				},
				{
					picture: "",
					fullName: "Maria Gomez",
					city: "",
					service: "",
					vehicleModel: "",
					vehicleMake: "",
					vehicleYear: ""
				}
			]
		},
		actions: {}
	};
};

export default getState;
