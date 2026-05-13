import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import AccountsTaxation from "./pages/services/AccountsTaxation";
import Bookkeeping from "./pages/services/Bookkeeping";
import Payroll from "./pages/services/Payroll";
import VAT from "./pages/services/VAT";
import RentalIncomePropertyTax from "./pages/services/RentalIncomePropertyTax";
import ContractorsFreelancers from "./pages/services/ContractorsFreelancers";
import ServiceChargeAccounting from "./pages/ServiceChargeAccounting";
import FreeResources from "./pages/FreeResources";
import ContactForm from "./pages/ContactForm";
import HomeServices from "./pages/HomeServices";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomeServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/servicecharge" element={<ServiceChargeAccounting />} />
          <Route path="/freeresources" element={<FreeResources />} />
          <Route path="/contact" element={<ContactForm />} />

          <Route
            path="/services/accounts-taxation"
            element={<AccountsTaxation />}
          />
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/services/payroll" element={<Payroll />} />
          <Route path="/services/vat" element={<VAT />} />
          <Route
            path="/services/rental-property-tax"
            element={<RentalIncomePropertyTax />}
          />
          <Route
            path="/services/contractors-freelancers"
            element={<ContractorsFreelancers />}
          />
        </Routes>
      </Layout>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
