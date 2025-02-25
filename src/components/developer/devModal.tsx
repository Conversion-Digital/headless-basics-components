import React from "react";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentMetaData } from "../../interfaces/componentMetaData";
import { capitalizeFirstChars, convertToDate } from "../../utils/helper";
import { ExampleCodeJSON } from "../code";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

function GetDeveloperInformation(metaData: ComponentMetaData, originalData?: unknown): import("react").ReactNode {
  return (
    <>
      {metaData && (
        <div className="columns-1">
          <div className="w-full">
            <strong>Rendering file:</strong> {metaData.rendering}
            {" ✓"}
          </div>
          <div className="w-full">
            <strong>Rendering file function name:</strong> {metaData.renderingExportFunction}()
          </div>
          <div className="w-full">
            <strong>CMS ID:</strong> {metaData.id}
          </div>
          <div className="w-full">
            <strong>CMS Data:</strong>
            <pre
              className={`border border-gray-300 rounded-md p-2 mt-1 text-sm  max-h-500 h-[10rem] overflow-y-scroll min-h-100 max-h-500`}
            >
              <ExampleCodeJSON language="json">{originalData as string}</ExampleCodeJSON>
            </pre>
          </div>
          <div className="w-full">
            <strong>Query file location:</strong> {metaData.queryFileLocation}
          </div>
          <div className="w-full">
            <strong>GraphQL query:</strong>
            <pre
              className={`border border-gray-300 rounded-md p-2 mt-1 text-sm  max-h-500 h-[10rem] overflow-y-scroll min-h-100 max-h-500`}
            >
              {metaData.query}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}

function GetContentEditorInformation(metaData: ComponentMetaData): import("react").ReactNode {
  if (metaData === undefined) return <> </>;
  return (
    <>
      {metaData.liveDocumentation !== "" && (
        <p className="mb-4">
          Component Documentation Page:{" "}
          <a href={metaData.liveDocumentation} target="_blank" rel="noopener noreferrer" className="underline">
            Documentation
          </a>
        </p>
      )}
      {/* <p className="font-semibold mb-4">CMS: {capitalizeFirstChars(process.env.NEXT_PUBLIC_CMS_VARIANT)}</p> */}
      <p className="mb-4">
        CMS Login:{" "}
        <a target="_blank" className="underline" href={capitalizeFirstChars(process.env.NEXT_PUBLIC_CMS_LOGIN || "")} rel="noreferrer">
          Login
        </a>
      </p>
      <p className="mb-4">CMS URL: {metaData.url}</p>
      {!!metaData?.lastUpdated?.length && <p className="font-semibold mb-4">Last updated: {convertToDate(metaData?.lastUpdated)}</p>}
      {metaData.youtubeVideo !== "" && (
        <>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon size={"xs"} style={{ width: "32px", height: "32px" }} icon={faVideo} className="text-red-500 mr-2" />
            <a href={metaData.youtubeVideo} target="_blank" rel="noopener noreferrer" className="underline">
              YouTube Help Video
            </a>
          </div>
        </>
      )}
    </>
  );
}

function GetGeneralDetails(metaData: ComponentMetaData): import("react").ReactNode {
  return (
    <>
      {metaData && (
        <>
          <h2 className="text-xl font-semibold mb-4">{metaData.name}</h2>
          <h3 className="mb-4">Type:: {metaData.typeName}</h3>
          <h4 className="mb-4">Variant:: {metaData.variant}</h4>
        </>
      )}
    </>
  );
}

const Modal = ({ onClose, metaData, originalData }: { onClose: () => void; metaData: ComponentMetaData; originalData?: unknown }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-1/2 mx-auto rounded-md shadow-md relative z-10  max-h-500">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-500">
          &times;
        </button>

        <Tabs defaultValue="0">
          <TabsList>
            <TabsTrigger value={"0"}>General</TabsTrigger>
            <TabsTrigger value={"1"}>Content Editor</TabsTrigger>
            <TabsTrigger value={"2"}>Developer</TabsTrigger>
          </TabsList>
          <TabsContent value={"0"}>{GetGeneralDetails(metaData)}</TabsContent>
          <TabsContent value={"1"}>{GetContentEditorInformation(metaData)}</TabsContent>
          <TabsContent value={"2"}>{GetDeveloperInformation(metaData, originalData)}</TabsContent>
        </Tabs>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-0" onClick={onClose}></div>
    </div>
  );
};

export default Modal;
