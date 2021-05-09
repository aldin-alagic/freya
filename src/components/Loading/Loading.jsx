import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { LoadingWrapper } from "./LoadingStyles";
import { colors } from "../../lib/style/theme";

function Loading() {
  return (
    <LoadingWrapper>
      <Loader type="TailSpin" color={colors.secondary} height={100} width={100} />
    </LoadingWrapper>
  );
}

export default Loading;
