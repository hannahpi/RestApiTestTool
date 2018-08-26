# RestApiTestTool
A simple tool written in JavaScript designed to (manually) test RESTful implementations.

## Method Support:
Currently this tool supports GET, POST, PATCH, PUT, DELETE

## Request Headers:
Currently supported: application/json, application/x-www-url-encoded, application/xml, and multipart/form-data.  Note that file uploads are not supported.  The multipart/form-data may be unnecessary since this form probably doesn't have the correct fields for you.  Then again if you're using this tool you're probably a programmer so you know what you're doing right?  You'd have to serialize, jsonify, or xmlize the object by hand though.

## Custom Headers:
I'm not sure what "custom headers" are supported right now.  You may want to reference https://www.iana.org/assignments/message-headers/message-headers.xml#prov-headers to see what headers may be supported.  I'd suspect that only those recognized as request headers will work at this time.  This needs further testing and/or research.  I'm currently using an XMLHTTP Request(XHR) so I believe it's based on what that would support.  I added a data field to facilitate X-CSRF-Token but I have no idea if it would work with XHR or not.

## Action:
This reflects the action field of a form.  This is where the request is sent.  Please note that for now you must include to full URI (include http or https).  Relative actions are not yet supported.

## Request:
This is the payload of the request.  This is used for POST, PATCH, and UPDATE requests.  Typically you'd include JSON object in your request but since you're in charge of your API this may differ.
