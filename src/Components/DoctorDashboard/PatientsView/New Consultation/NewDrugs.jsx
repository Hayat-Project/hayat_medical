import { useState } from "react";
import ConsultaionSteps from "./ConsultaionSteps";

function NewDrugs() {
  const [prescriptionDrugs, setPrescriptionDrugs] = useState([]);

  const addDrug = (newDrug) => {
    setPrescriptionDrugs([...prescriptionDrugs, newDrug]);
  };

  const handleDeleteDrug = (index) => {
    const updatedDrugs = prescriptionDrugs.filter((_, i) => i !== index);
    setPrescriptionDrugs(updatedDrugs);
  };

  return (
    <ConsultaionSteps
      prescriptionDrugs={prescriptionDrugs}
      setPrescriptionDrugs={setPrescriptionDrugs}
      addDrug={addDrug}
      handleDeleteDrug={handleDeleteDrug}
    />
  );
}

export default NewDrugs;
