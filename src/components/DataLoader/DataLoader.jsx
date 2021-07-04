import Loader from 'react-loader-spinner';

import { colors } from '../../lib/style/theme';
import { DataLoaderWrapper } from './DataLoaderStyles';

const DataLoader = () => {
	return (
		<DataLoaderWrapper>
			<Loader type="TailSpin" color={colors.blue} height={100} width={100} />
		</DataLoaderWrapper>
	);
};

export default DataLoader;
