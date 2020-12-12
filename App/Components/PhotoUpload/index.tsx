// import React from 'react';
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import {options} from './util';

import {Container, PreviewImage} from './styles';

const PhotoUpload: React.FC = ({photo, setPhoto, image}) => {
	const imagePickerCallback = (data) => {
		if (data.didCancel) {
			return;
		}
		if (data.error) {
			return;
		}

		if (!data.uri) {
			return;
		}
		console.log(data);
		setPhoto(data);
	};

	return (
		<Container
			onPress={() => ImagePicker.showImagePicker(options, imagePickerCallback)}>
			{!photo?.uri && (
				<Icon
					name="ios-camera-outline"
					size={32}
					color="#666"
					style={{top: 104}}
				/>
			)}
			{photo?.uri && <PreviewImage source={{uri: photo.uri}} />}
			{!photo?.uri && <PreviewImage source={{uri: image}} />}
		</Container>
	);
};

export default PhotoUpload;
