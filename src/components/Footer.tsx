const Footer = () => {
  return <footer className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="Anduin Webworks"
              className="h-10 w-10 object-contain"
              src="/uploads/logo-footer.png"
            />
            <span className="font-cinzel text-lg font-bold">
              Anduin Webworks
            </span>
          </div>
          <p className="font-outfit text-sm font-medium tracking-wide text-center">
            © {new Date().getFullYear()} Anduin Webworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;