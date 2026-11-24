import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import FilterGroup from '../../components/FilterGroup/FilterGroup.jsx';
import { products } from '../../data/products.js';
import { emptyFilters, filterGroups, sortOptions } from '../../data/filters.js';
import { filterProducts, sortProducts } from '../../utils/products.js';
import './ProductListingPage.css';

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const term = searchParams.get('filter') ?? '';

  const [filters, setFilters] = useState(emptyFilters);
  const [sortOrder, setSortOrder] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(
    () => sortProducts(filterProducts(products, { term, ...filters }), sortOrder),
    [term, filters, sortOrder],
  );

  const hasActiveFilters = term !== '' || Object.values(filters).some((values) => values.length > 0);
  const total = results.length;
  const countText = `${total} ${total === 1 ? 'produto' : 'produtos'}`;
  const title = term ? `Resultados para "${term}" - ${countText}` : `Todos os produtos - ${countText}`;

  function updateFilter(key, values) {
    setFilters((current) => ({ ...current, [key]: values }));
  }

  function clearFilters() {
    setFilters(emptyFilters);
    setSearchParams({});
  }

  return (
    <Layout>
      <div className="container page-section listing-page">
        <aside className="listing-page__sidebar">
          <button
            type="button"
            className="listing-page__toggle"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            aria-controls="listing-filters"
          >
            {filtersOpen ? 'Ocultar filtros' : 'Filtros e ordenação'}
          </button>

          <div id="listing-filters" className={`listing-page__panel${filtersOpen ? ' listing-page__panel--open' : ''}`}>
            <div className="listing-page__sort">
              <label htmlFor="sort-order">Ordenar por</label>
              <select id="sort-order" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <div className="listing-page__filters">
              <h2 className="listing-page__filters-title">Filtrar por</h2>
              <hr />
              {filterGroups.map((group) => (
                <FilterGroup
                  key={group.key}
                  title={group.title}
                  inputType={group.inputType}
                  options={group.options}
                  selected={filters[group.key]}
                  onChange={(values) => updateFilter(group.key, values)}
                />
              ))}
              {hasActiveFilters && (
                <button type="button" className="btn btn--outline listing-page__clear" onClick={clearFilters}>
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </aside>

        <div className="listing-page__content">
          <Section title={title} titleAlign="left">
            {total > 0 ? (
              <ProductListing products={results} />
            ) : (
              <div className="listing-page__empty" role="status">
                <p className="listing-page__empty-title">Nenhum produto encontrado</p>
                <p>Tente buscar por outro termo ou remover alguns filtros.</p>
                <button type="button" className="btn" onClick={clearFilters}>
                  Limpar filtros
                </button>
              </div>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  );
}
