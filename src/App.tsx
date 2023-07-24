import "./App.css";
import TurboSelect from "./react-turbo-select";
// import TurboSelect from "react-turbo-select";
// import TurboSelect from "react-turbo-select";
// import "react-turbo-select/dist/style.css";
function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "linear-gradient(231deg, rgba(131,58,180,1) 26%, rgba(253,29,29,1) 65%, rgba(252,176,69,1) 100%)",
      }}
    >
      <TurboSelect
        isMultiple
        // iconFlicker
        // getContainerRef={(ref: any) => {
        //   console.log("Container Ref ", ref.current);
        // }}
        // getMenuRef={(ref: any) => {
        //   console.log(ref.current);
        // }}
        mode="dark"
        width={500}
        // gapBetweenControls={30}
        // borderRadius={"large"}
        containerStyles={{ marginTop: "400px" }}
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
    </div>
  );
}

export default App;
