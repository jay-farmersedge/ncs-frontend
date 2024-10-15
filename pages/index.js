import Navbar from '../components/Navbar';
import TextAreaWithInstructions from '../components/TextAreaWithInstructions';
import TableContainer from '../components/TableContainer';
import AdSpace from '../components/AdSpace';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-md-2">
            <AdSpace />
          </div>
          <div className="col-md-8">
            <TextAreaWithInstructions />
            <TableContainer />
          </div>
          <div className="col-md-2">
            <AdSpace />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
