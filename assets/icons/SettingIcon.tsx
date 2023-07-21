import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SettingIcon(props: any) {
  return (
    <Svg
      width={props.width ? props.width : 23}
      height={props.height ? props.height : 23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.437 23H9.556a.888.888 0 01-.573-.201.841.841 0 01-.31-.518l-.47-2.903a7.963 7.963 0 01-1.176-.547 8.1 8.1 0 01-1.088-.718l-2.734 1.236a.892.892 0 01-.647.043.848.848 0 01-.5-.417l-1.94-3.364a.733.733 0 01-.089-.604.958.958 0 01.353-.517l2.529-1.811a3.347 3.347 0 01-.074-.59 13.42 13.42 0 01-.014-.589c0-.172.005-.369.014-.59.01-.22.035-.416.074-.589L.382 8.51a.958.958 0 01-.353-.518.733.733 0 01.089-.603l1.94-3.364a.848.848 0 01.5-.417.892.892 0 01.647.043l2.734 1.237c.314-.25.677-.49 1.088-.72.412-.23.804-.402 1.176-.517L8.673.72A.842.842 0 018.984.2.889.889 0 019.556 0h3.881c.216 0 .407.067.574.201.166.134.269.307.308.518l.47 2.904c.373.134.77.311 1.191.531.422.22.78.465 1.074.734l2.734-1.237a.892.892 0 01.647-.043.848.848 0 01.5.417l1.94 3.335a.806.806 0 01.103.618.851.851 0 01-.367.532l-2.529 1.754c.04.191.064.398.074.618a13.027 13.027 0 010 1.222 3.92 3.92 0 01-.074.604l2.529 1.782a.958.958 0 01.353.518c.059.21.03.412-.088.603l-1.941 3.364a.848.848 0 01-.5.417.892.892 0 01-.647-.043l-2.734-1.236c-.314.249-.672.493-1.073.733-.402.24-.8.416-1.191.532l-.47 2.903a.842.842 0 01-.31.518.888.888 0 01-.573.201zm-1.94-7.762c1.058 0 1.96-.365 2.705-1.093.745-.728 1.117-1.61 1.117-2.645s-.373-1.917-1.117-2.645c-.745-.728-1.647-1.093-2.706-1.093-1.058 0-1.96.365-2.705 1.093-.744.728-1.117 1.61-1.117 2.645s.373 1.917 1.117 2.645c.745.728 1.647 1.093 2.705 1.093z"
        fill={props.fillColor ? props.fillColor : '#08979D'}
      />
    </Svg>
  );
}

export default SettingIcon;
