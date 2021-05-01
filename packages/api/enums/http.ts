/**
 * HTTP enums.
 *
 * @description Enums for HTTP response status.
 * @author Dani Perchés <anduyosh@gmail.com>
 */

/**
 * Enum for HTTP status codes.
 * @enum {number}
 * @readonly
 */
enum StatusCode {
    Continue = 100,
    SwitchingProtocols = 101,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MultipleChoices = 300,
    MovedPermantently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    TemporaryRedirect = 307,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    URITooLong = 414,
    UnsupportedMediaType = 415,
    RangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    UpgradeRequired = 426,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HTTPVersionNotSupported = 505,
    ExpiredToken = 600
}

/**
 * Enum for HTTP errors.
 * @enum {string}
 * @readonly
 */
enum StatusError {
    MovedPermantently = 'La URI del recurso solicitado ha sido cambiada de forma permanente',
    Found = 'La URI del recurso solicitado ha sido cambiada temporalmente',
    NotModified = 'La respueste no ha sido modificada',
    BadRequest = 'La solicitud presenta una sintaxis inválida y ha sido denegada por el servidor',
    Unauthorized = 'No tiene los permisos necesarios para acceder a este contenido',
    Forbidden = 'No tiene los permisos necesarios para acceder a esta este contenido',
    NotFound = 'El recurso solicitado no está disponible en estos momentos',
    MethodNotAllowed = 'El recurso solicitado no tiene habilitado el método al que intenta acceder',
    NotAcceptable = 'El servidor no ha encontrado ningún contenido bajo estos parámetros',
    RequestTimeout = 'El servidor ha detectado una conexión inactiva y desea desconectarla',
    Conflict = 'La petición enciada presenta uno o varios conflictos con el estado actual del servidor',
    Gone = 'El recurso solicitado ha sido eliminado del servidor',
    LengthRequired = 'La petición ha sido rechazada, el campo Content-Length debe estar definido',
    PreconditionFailed = 'El servidor no cumple con alguna de las pre-condiciones establecidas',
    PayloadTooLarge = 'La entidad de petición excede los límites definidos por el servidor',
    URITooLong = 'La URI solicitada excede la longitud definida por el servidor',
    UnsupportedMediaType = 'El formato multimedia de los datos solicitados no está soportado por el servidor',
    RangeNotSatisfiable = 'El rango solicitado no cumple con el establecido en el servidor',
    ExpectationFailed = 'La expectativa solicitada no puede ser cumplida por el servidor',
    UpgradeRequired = 'El servidor requiere una versión actualizada del protocolo usado',
    InternalServerError = 'Se ha producido un error interno del servidor',
    NotImplemented = 'El método solicitado no está soportado por el servidor',
    BadGateway = 'El servidor obtuvo una respuesta inválida del servidor ascendente',
    ServiceUnavailable = 'El servidor no está disponible por causas de mantenimiento o sobrecarga',
    GatewayTimeout = 'El servidor no pudo obtener una respuesta por parte del servidor ascendente',
    HTTPVersionNotSupported = 'La versión de HTTP usada en la solicitud no está soportada por el servidor',
    ExpiredToken = 'Su token de autenticación ha expirado.'
}

const Http = {
    StatusCode,
    StatusError
};

export default Http;
