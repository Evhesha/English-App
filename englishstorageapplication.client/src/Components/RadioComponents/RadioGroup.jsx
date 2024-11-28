const RadioGroup = () => {
  return (
    <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" defaultChecked />
      <label className="btn btn-outline-primary" htmlFor="vbtn-radio1">Radio 1</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="vbtn-radio2">Radio 2</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="vbtn-radio3">Radio 3</label>
    </div>
  );
};

export default RadioGroup;
