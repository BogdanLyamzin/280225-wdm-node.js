type RequestStatus = "idle" | "loading" | "success" | "error";

const getStatusMessage = (state: RequestStatus): string => {
  switch (state) {
    // case "idle":
    //     return "Loding not start";
    case "loading":
      return "Loading data";
    case "success":
      return "Successfully load data";
    case "error":
      return "Error load data";
    default:
      const _exhaustiveCheck: never = state;
      return state;
  }
};

console.log(getStatusMessage("loading"));
console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));

interface LoginRequest {
  type: "login";
  username: string;
  password: string;
}

interface RegisterRequest {
  type: "register";
  username: string;
  email: string;
  password: string;
}

interface LogoutRequest {
    type: "logout";
    userId: number;
}

type Request = LoginRequest | RegisterRequest | LogoutRequest;

const handleRequest = (req: Request) => {
  switch (req.type) {
    case "login":
      return `${req.username} logged`;
    case "register":
      return `User with ${req.username} and ${req.email} registered`;
    default:
        const value: never = req;
        return value;
  }
};

handleRequest({ type: "login", username: "Bohdan", password: "123456" });
handleRequest({
  type: "register",
  username: "Bohdan",
  email: "bohdan@gmail.com",
  password: "123456",
});
// handleRequest({ type: "logout", userId: 1});
