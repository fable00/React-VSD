import { LineWave } from "react-loader-spinner";
import { useTheme } from "styled-components";

export const LineWaveVSD = ()=>{
  const theme = useTheme()

  return (
    <LineWave 
    visible={true}
    height="100"
    width="100"
    color="#4fa94d"
    ariaLabel="line-wave-loading"
    wrapperStyle={{}}
    wrapperClass=""
    firstLineColor={theme.primary}
    middleLineColor={theme.primary}
    lastLineColor={theme.primary}
    />
  )
}