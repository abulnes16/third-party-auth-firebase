import { facebookProvider, githubProvider, googleProvider } from "../modules";

export function getProviderForProviderID(provider: string) {
  switch (provider) {
    case "facebook.com":
      return facebookProvider;
    case "google.com":
      return googleProvider;
    case "github.com":
      return githubProvider;
    default:
      return googleProvider;
  }
}
