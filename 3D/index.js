//创建三维场景
const scene = new THREE.Scene();
//创建透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//创建构造器
const renderer = new THREE.WebGLRenderer();

const axesHelper = new THREE.AxesHelper(5);//辅助线
scene.add(axesHelper);

//设置渲染绘制区域大小
renderer.setSize(window.innerWidth, window.innerHeight);
//将canvas添加到页面中
document.body.appendChild(renderer.domElement);
//创建几何体(正方形)
const geometry = new THREE.BoxGeometry(300, 300, 300);//宽高深

//创建圆柱
const CylinderGeometry = new THREE.CylinderGeometry(100, 100, 400, 640);
const MeshBasicMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: new THREE.TextureLoader().load('../images/background.webp')
});
const MeshBasicMaterial2 = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    map: new THREE.TextureLoader().load('../images/ETH.png')
});
const cylinder = new THREE.Mesh(CylinderGeometry, [MeshBasicMaterial,MeshBasicMaterial2,MeshBasicMaterial2]);
cylinder.position.set(-720, 0, 0)
scene.add(cylinder);

//创建材质+贴图1
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    map: new THREE.TextureLoader().load('../images/background.webp')
});
//创建材质+贴图2
const material2 = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('../images/ETH.png')
});

//创建网格
const cube = new THREE.Mesh(geometry, [material, material2, material, material, material, material]);
//将网格添加到创景中
scene.add(cube);
//设置z坐标的距离
camera.position.z = 1000;

//获取在射线上的接触点
function onmodelclick(event) {
    //获取鼠标坐标
    var mouse = new THREE.Vector2();
    //光线投射用于进行鼠标拾取
    var raycaster = new THREE.Raycaster();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    //通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(mouse, camera);
    // 计算物体和射线的焦点
    const intersects = raycaster.intersectObjects(scene.children);
    console.log(intersects);
}
//动画
function animate() {
    // 1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
    // 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。
    //3、停止用cancelAnimationFrame
    requestAnimationFrame(animate);
    //设置旋转角度
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cylinder.rotation.y += 0.01;
    // cylinder.rotation.x += 0.01;
    cylinder.rotation.z += 0.01;
    //将创景渲染出来
    renderer.render(scene, camera);
};

animate();
//点击模型
window.addEventListener('click', onmodelclick);