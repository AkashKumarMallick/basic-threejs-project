import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import useSpline from '@splinetool/r3f-spline';
import { Canvas } from 'react-three-fiber';

const Home = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/WvXxPnvCe4e4DavO/scene.splinecode')

  return (
    <div>
      <Canvas style={{height: '100vh'}}>
        <>
        <>
      <color attach="background" args={['#74757a']} />
      <group dispose={null}>
        <scene name="Scene 1">
          <spotLight
            name="Spot Light 2"
            castShadow
            intensity={1}
            angle={Math.PI / 6}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            position={[-120.6, 950.22, 1693.84]}
            scale={[1, 1, 1.2]}
          />
          <group name="Tree olivine_01" position={[-1139.04, 598.08, -70.94]} scale={[2.66, 2.61, 2.66]}>
            <mesh
              name="branch"
              geometry={nodes.branch.geometry}
              material={materials.tree}
              castShadow
              receiveShadow
              position={[1.33, 191.03, -8.3]}
              scale={0.66}
            />
            <mesh
              name="trunk"
              geometry={nodes.trunk.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-24.28, 17.25, -10.48]}
              rotation={[-Math.PI, 0.34, -Math.PI]}
              scale={0.85}
            />
          </group>
          <group name="Lamp Post  Double " position={[-134.27, 601.09, 1681.96]}>
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 79.81, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.04}
            />
            <mesh
              name="Cylinder 6"
              geometry={nodes['Cylinder 6'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 407.96, -0.06]}
              rotation={[0, 0, 0]}
              scale={[0.01, 0, 0.01]}
            />
            <mesh
              name="Cylinder 11"
              geometry={nodes['Cylinder 11'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 344.37, -0.06]}
            />
            <mesh
              name="Cylinder 10"
              geometry={nodes['Cylinder 10'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 356.57, -0.06]}
            />
            <mesh
              name="Cylinder 4"
              geometry={nodes['Cylinder 4'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0, 236.4, -0.06]}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes['Cylinder 2'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 40.76, -0.06]}
              rotation={[0, 0, 0]}
              scale={[0.07, 0.01, 0.07]}
            />
            <mesh
              name="Sphere 3"
              geometry={nodes['Sphere 3'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0, 367.76, -58.58]}
              rotation={[0, 0, 0]}
              scale={[0.05, 0.04, 0.05]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes['Sphere 2'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0, 367.76, 58.58]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.05, 0.04, 0.05]}
            />
            <mesh
              name="Sphere 31"
              geometry={nodes['Sphere 31'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[0, 368.93, -58.58]}
              rotation={[-Math.PI, 0, 0]}
              scale={[0.05, 0.04, 0.05]}
            />
            <mesh
              name="Sphere1"
              geometry={nodes.Sphere1.geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[0, 368.93, 58.58]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.05, 0.04, 0.05]}
            />
            <mesh
              name="Merged Geometry"
              geometry={nodes['Merged Geometry'].geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0, 400.99, 0]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[0.06, 390.53, -0.07]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.01}
            />
          </group>
          <group name="Fountain Detailed" position={[-974.55, 630.85, 2016.83]}>
            <mesh
              name="water"
              geometry={nodes.water.geometry}
              material={materials.water}
              castShadow
              receiveShadow
              position={[0, 158.12, 0]}
            />
            <mesh
              name="Cylinder 7"
              geometry={nodes['Cylinder 7'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 294.01, 0]}
              rotation={[0, 0, 0]}
              scale={[0.01, 0.19, 0.01]}
            />
            <mesh
              name="Cylinder 61"
              geometry={nodes['Cylinder 61'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 232.68, 0]}
              rotation={[0, 0, 0]}
              scale={[0.02, 0.21, 0.02]}
            />
            <mesh
              name="Cylinder 5"
              geometry={nodes['Cylinder 5'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 144.92, 0]}
              rotation={[0, 0, 0]}
              scale={[0.02, 0.32, 0.02]}
            />
            <mesh
              name="Cylinder 3"
              geometry={nodes['Cylinder 3'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 63.15, 0]}
              rotation={[0, 0, 0]}
              scale={[0.03, 0.38, 0.03]}
            />
            <mesh
              name="Cylinder 62"
              geometry={nodes['Cylinder 62'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 291.64, 0]}
              rotation={[0, 0, 0]}
              scale={0.02}
            />
            <mesh
              name="Cylinder 51"
              geometry={nodes['Cylinder 51'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 220.85, 0]}
              rotation={[0, 0, 0]}
              scale={0.04}
            />
            <mesh
              name="Cylinder 41"
              geometry={nodes['Cylinder 41'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 130.92, 0]}
              rotation={[0, 0, 0]}
              scale={0.05}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes['Cylinder 21'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 24.76, 0]}
              rotation={[0, 0, 0]}
              scale={0.08}
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[0, 311.34, 0]}
              rotation={[0, 0, 0]}
              scale={[0.14, 0.09, 0.14]}
            />
          </group>
          <group name="Flower Square" position={[581.55, 654.94, 1164.8]}>
            <mesh
              name="white"
              geometry={nodes.white.geometry}
              material={materials.white_flower}
              castShadow
              receiveShadow
              position={[-10.82, 63.43, -3.4]}
            />
            <mesh
              name="yellow"
              geometry={nodes.yellow.geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[3.22, 66.04, -17.04]}
            />
            <mesh
              name="pink"
              geometry={nodes.pink.geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[12.72, 72.59, 4.6]}
            />
            <mesh
              name="green"
              geometry={nodes.green.geometry}
              material={materials['green-dark']}
              castShadow
              receiveShadow
              position={[-5.46, 38.44, -11.99]}
            />
            <mesh
              name="gress"
              geometry={nodes.gress.geometry}
              material={materials.green}
              castShadow
              receiveShadow
              position={[-14.28, 19.7, 8.5]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.67, 0.62, 0.03]}
            />
            <mesh
              name="wood"
              geometry={nodes.wood.geometry}
              material={materials.wood}
              castShadow
              receiveShadow
              position={[-14.72, 20.49, 8.71]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.39, 0.37, 0.03]}
            />
          </group>
          <mesh
            name="Sphere2"
            geometry={nodes.Sphere2.geometry}
            material={materials['Sphere2 Material']}
            castShadow
            receiveShadow
            position={[-6305.25, 0, -31974.5]}
          />
          <spotLight
            name="Spot Light"
            castShadow
            intensity={0.39}
            angle={0.19}
            penumbra={0.4}
            decay={0}
            distance={9898}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={100000}
            color="#f9fbec"
            position={[0, 6742.55, 4656.43]}
            rotation={[0.55, 0, 0]}
          />
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[79.16, 598.69, 984.95]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.48, 0.96, 1]}
          />
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            up={[0, 1, 0]}
            position={[79.16, 2501.89, 19899.81]}
            rotation={[-0.06, 0, 0]}
          />
          <group name="Building" position={[76.02, 612.45, 370.35]} rotation={[0, 0.07, 0]} scale={[1.21, 1.35, 1.21]}>
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials['wall-orange']}
              castShadow
              receiveShadow
              position={[-1.05, 5.36, 31.24]}
              scale={0.73}
            />
            <mesh
              name="Cube 25"
              geometry={nodes['Cube 25'].geometry}
              material={materials.wall}
              castShadow
              receiveShadow
              position={[0.54, 409.97, 28.68]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.73}
            />
            <mesh
              name="Boolean"
              geometry={nodes.Boolean.geometry}
              material={materials['wall-orange']}
              castShadow
              receiveShadow
              position={[0.18, 202.04, 29.09]}
              scale={0.9}
            />
            <mesh
              name="Cube 18"
              geometry={nodes['Cube 18'].geometry}
              material={materials.wall}
              castShadow
              receiveShadow
              position={[0.93, 216.97, 266.71]}
              scale={0.73}
            />
            <group
              name="Group 9"
              position={[-193.18, 219.43, 28.33]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.94, 0.73, 0.73]}
            >
              <mesh
                name="Rectangle 2"
                geometry={nodes['Rectangle 2'].geometry}
                material={materials.beige}
                castShadow
                receiveShadow
                position={[-0.49, -0.06, -1.46]}
              />
              <mesh
                name="Cube 14"
                geometry={nodes['Cube 14'].geometry}
                material={materials['window-1']}
                castShadow
                receiveShadow
              />
            </group>
            <group name="Group 29" position={[-4.16, 314.57, 268.96]} scale={0.9}>
              <mesh
                name="Merged Geometry 4"
                geometry={nodes['Merged Geometry 4'].geometry}
                material={materials.beige}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry1"
                geometry={nodes['Merged Geometry1'].geometry}
                material={materials['glass-window']}
                castShadow
                receiveShadow
                position={[0.13, 0.1, 0.88]}
                scale={1}
              />
            </group>
            <group name="Group 8" position={[0.65, 184.7, 310.9]} scale={0.73}>
              <mesh
                name="Merged Geometry2"
                geometry={nodes['Merged Geometry2'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-0.01, 0, 0]}
                scale={1.24}
              />
              <mesh
                name="Merged Geometry 2"
                geometry={nodes['Merged Geometry 2'].geometry}
                material={materials['window-1']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                scale={1.24}
              />
            </group>
            <group name="Group 27" position={[-178.5, 94.56, 28.22]} scale={0.73}>
              <mesh
                name="Merged Geometry 3"
                geometry={nodes['Merged Geometry 3'].geometry}
                material={materials['window-1']}
                castShadow
                receiveShadow
                position={[0.44, 0, 0]}
                scale={1.24}
              />
              <mesh
                name="Rectangle 21"
                geometry={nodes['Rectangle 21'].geometry}
                material={materials['glass-window']}
                castShadow
                receiveShadow
                position={[20.26, 21.01, -1.01]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.91, 1, 1]}
              />
              <mesh
                name="Rectangle 22"
                geometry={nodes['Rectangle 22'].geometry}
                material={materials['glass-window']}
                castShadow
                receiveShadow
                position={[-17.62, 8.5, 197.12]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle 23"
                geometry={nodes['Rectangle 23'].geometry}
                material={materials['glass-window']}
                castShadow
                receiveShadow
                position={[-17.62, 8.5, -194.61]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={1}
              />
            </group>
            <group name="Group 28" position={[0.22, 92.55, 241.58]} scale={0.9}>
              <mesh
                name="Merged Geometry 21"
                geometry={nodes['Merged Geometry 21'].geometry}
                material={materials['window-1']}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                scale={1}
              />
              <mesh
                name="Merged Geometry3"
                geometry={nodes['Merged Geometry3'].geometry}
                material={materials['glass-window']}
                castShadow
                receiveShadow
                position={[-0.17, 16.51, -2.11]}
                scale={1}
              />
            </group>
          </group>
          <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
    </>
      </Canvas>
    </div>
  )
}

export default Home