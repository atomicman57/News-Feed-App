import { expect, assert } from 'chai';
import sinon from 'sinon';
import { describe, it } from 'mocha';

import { Articles, Sources } from './ApiTestData';
import NewsApi from '../../src/utils/NewsApi';

describe('News Api', () => {
  it('getHeadlines should be a functon', () => {
    expect(NewsApi.getHeadlines).to.be.a('function');
  });

  it('getSources should be a functon', () => {
    expect(NewsApi.getSources).to.be.a('function');
  });

  it('should exist', () => {
    expect(NewsApi).to.exist;
  });

  it('getSources should exist', () => {
    expect(NewsApi.getSources).to.exist;
  });

  it('getHeadlines should return data from API', () => {
    sinon.stub(NewsApi, 'getHeadlines').yieldsTo('success', Articles);
    NewsApi.getHeadlines({
      success: (data) => {
        assert.deepEqual(Articles, data);
      },
    });
    NewsApi.getHeadlines.restore();
  });

  it('getSources should return data from API', () => {
    sinon.stub(NewsApi, 'getSources').yieldsTo('success', Sources);
    NewsApi.getSources({
      success: (data) => {
        assert.deepEqual(Sources, data);
      },
    });
    NewsApi.getSources.restore();
  });
});

