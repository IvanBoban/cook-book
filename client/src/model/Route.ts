export default interface Route {
  path: string;
  name: string;
  component: React.ElementType;
  exact?: boolean;
}
