/**
 * Memuat external library yang direquest melalui tag &lt;script&gt; (tidak melalui import dari package.json).
 *
 * @component
 * @category Components
 * @subcategory Abstracts
 */
function Scripts() {
  return (
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.895.0.min.js" />
  );
}

export default Scripts;
