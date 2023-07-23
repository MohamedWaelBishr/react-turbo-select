import "./App.css";
import TurboSelect from "./react-turbo-select";

function App() {
  return (
    <>
      <TurboSelect
        isMultiple
        // iconFlicker
        // getContainerRef={(ref: any) => {
        //   console.log("Container Ref ", ref.current);
        // }}
        // getMenuRef={(ref: any) => {
        //   console.log(ref.current);
        // }}
        // mode="dark"
        width={500}
        // gapBetweenControls={30}
        // borderRadius={"large"}
        // containerStyles={{ borderRadius: "10px" }}
        // onReachMaxScroll={() => {
        //   console.log("reach max scroll");
        // }}
        // height={60}
        // menuHeight={400}
        // openMenuOnClick={false}
        // showTagsControls={false}
        // isRtl={true}
        options={[
          { label: "React", value: "react" },
          { label: "Vite", value: "vite" },
          { label: "Ahmed", value: "ahmed" },
          { label: "Mohamed", value: "mohamed" },
          { label: "Khaled", value: "khaled" },
          { label: "Ali", value: "ali" },
          { label: "Maher", value: "maher" },
          { label: "Moheb", value: "moheb" },
          { label: "Mahmoud", value: "mahmoud" },
          { label: "Nour", value: "nour" },
          { label: "Salah", value: "salah" },
          { label: "Ameer", value: "ameer" },
        ]}
      />
    </>
  );
}

export default App;
