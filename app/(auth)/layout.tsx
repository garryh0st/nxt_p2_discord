const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#1e1e1e]">
      {children}
    </div>
  );
};
export default AuthLayout;
