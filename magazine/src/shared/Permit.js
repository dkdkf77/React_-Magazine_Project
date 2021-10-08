import React from "react";
import {userSelector, useSelector} from "react-redux"
import user from "../redux/modules/user";
import {apiKey} from "./firebase";


const Permit = (props) => {
	const is_login = useSelector(state => state.user.is_login);

	const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  //is_login의 쿠키를 확인 해주는 친구
	const is_session = sessionStorage.getItem(_session_key)? true : false;
	
	
	if(is_session && is_login){
		return <React.Fragment>{props.children}</React.Fragment>;
	}

	return null;
	};


	export default Permit;