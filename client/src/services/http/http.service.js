import { HttpError } from 'exceptions/exceptions';
import { getStringifiedQuery } from 'helpers/helpers';
import { HttpHeader, HttpMethod } from 'common/enums/enums';

class Http {
  load(url, options = {}) {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      query
    } = options;
    const headers = this._getHeaders({
      contentType
    });

    return fetch(this._getUrl(url, query), {
      method,
      headers,
      body: payload
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders({ contentType }) {
    const headers = new Headers();
    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }
    return headers;
  }

  async _checkStatus(response) {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText
      }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message
      });
    }

    return response;
  }

  _getUrl(url, query) {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  _parseJSON(response) {
    return response.json();
  }

  _throwError(err) {
    throw err;
  }
}

export { Http };
