import './App.css'

import { TurboSelect } from './react-turbo-select'
// import TurboSelect from "react-turbo-select";
// import TurboSelect from "react-turbo-select";
// import "react-turbo-select/dist/style.css";
function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '98vh',
        display: 'flex',
        // justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        background:
          'linear-gradient(231deg, rgba(131,58,180,1) 26%, rgba(253,29,29,1) 65%, rgba(252,176,69,1) 100%)',
      }}
    >
      <TurboSelect
        width={800}
        isMultiple
        isSearchable
        // iconFlicker
        // getContainerRef={(ref: any) => {
        //   console.log("Container Ref ", ref.current);
        // }}
        // getMenuRef={(ref: any) => {
        //   console.log(ref.current);
        // }}
        // mode="dark"
        // gapBetweenControls={30}
        // borderRadius={"large"}
        containerStyles={{ marginTop: '400px' }}
        // tagStyle={{ backgroundColor: 'red' }}
        // onReachMaxScroll={() => {
        //   console.log("reach max scroll");
        // }}
        // height={60}
        // menuHeight={400}
        // openMenuOnClick={false}
        // showTagsControls={false}
        // isRtl={true}
        // options={[
        //   { label: 'React', value: 'react' },
        //   { label: 'Vite', value: 'vite' },
        //   { label: 'Ahmed', value: 'ahmed' },
        //   { label: 'Mohamed', value: 'mohamed' },
        //   { label: 'Khaled', value: 'khaled' },
        //   { label: 'Ali', value: 'ali' },
        //   { label: 'Maher', value: 'maher' },
        //   { label: 'Moheb', value: 'moheb' },
        //   { label: 'Mahmoud', value: 'mahmoud' },
        //   { label: 'Nour', value: 'nour' },
        //   { label: 'Salah', value: 'salah' },
        //   { label: 'Ameer', value: 'ameer' },
        // ]}
        optionsGroups={[
          {
            groupName: 'First Group',
            groupValues: [
              { label: 'React', value: 'react' },
              { label: 'Vite', value: 'vite' },
              { label: 'Ahmed', value: 'ahmed' },
              { label: 'Mohamed', value: 'mohamed' },
            ],
          },
          {
            groupName: 'Second Group',
            groupValues: [
              { label: 'Khaled', value: 'khaled' },
              { label: 'Ali', value: 'ali' },
              { label: 'Maher', value: 'maher' },
              { label: 'Moheb', value: 'moheb' },
            ],
          },
          {
            groupName: 'Third Group',
            groupValues: [
              { label: 'Mahmoud', value: 'mahmoud' },
              { label: 'Nour', value: 'nour' },
              { label: 'Salah', value: 'salah' },
              { label: 'Ameer', value: 'ameer' },
            ],
          },
        ]}
      />
    </div>
  )
}

export default App
