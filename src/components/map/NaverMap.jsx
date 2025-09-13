import { useEffect, useRef } from "react";

const NaverMap = () => {
  // useRef를 사용하여 지도를 담을 DOM 요소를 참조합니다.
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    // 지도를 표시할 DOM 요소가 없거나 naver 객체가 없다면 지도를 생성하지 않습니다.
    if (!mapElement.current || !naver) return;

    // 지도의 초기 위치와 줌 레벨을 설정합니다.
    const location = new naver.maps.LatLng(37.5665, 126.978); // 서울 시청
    const mapOptions = {
      center: location,
      zoom: 17, // 줌 레벨
      zoomControl: true, // 줌 컨트롤 표시
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT, // 줌 컨트롤 위치
      },
    };

    // 지도를 생성합니다.
    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 지도에 마커를 추가합니다.
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []); // 의존성 배열을 비워두어 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 합니다.

  return (
    <>
      {/* 지도를 표시할 div 요소를 반환합니다. */}
      <div ref={mapElement} style={{ width: "100%", height: "500px" }} />
    </>
  );
};

export default NaverMap;
