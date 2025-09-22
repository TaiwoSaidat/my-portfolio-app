function Footer() {
  return (
    <section className="p-4 bg-secondary flex justify-center">
      <p className="font-bold text-primary">
        {/* ©copyright */}
        &copy;  2023. All rights are reserved by <span></span>
        <a
          href="https://github.com/TaiwoSaidat"
          className="text-primary hover:text-secondary hover:bg-primary shadow transition hover:shadow-xl hover:scale-[102%] hover:p-2 hover:rounded-md "
        >
          TaiwoSaidat
        </a>
      </p>
    </section>
  );
}

export default Footer;
