/**
 * WordPress dependencies
 */
const { SVG, Path, G } = wp.components;

/**
 * Custom icons
 */
const icons = {};

icons.blockIcon =
<SVG className="dashicon components-coblocks-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
	<Path d="m7.65612086 3.00146848 8.60095684-.00146814c1.6268055-.00027769 2.2175432.16938914 2.8138163.48807555.5962732.3186864 1.0652814.78641505 1.3862243 1.38244235.3209428.59602729.4931785 1.18725228.5010418 2.81773904l.0415737 8.62042012c.0078633 1.6304868-.1586695 2.2217696-.4738629 2.8179055-.3151934.5961358-.7796894 1.0640238-1.3728878 1.3829133-.5931983.3188894-1.1822985.4887576-2.809104.4890353l-8.60095683.0014682c-1.62680543.0002776-2.21754313-.1693892-2.81381629-.4880756-.59627317-.3186864-1.06528137-.786415-1.38622424-1.3824423-.32094288-.5960273-.49317854-1.1872523-.50104188-2.8177391l-.04157365-8.6204201c-.00786334-1.63048677.15866944-2.22176958.47386289-2.81790546.31519344-.59613588.77968944-1.06402387 1.37288777-1.38291331.59319834-.31888944 1.18229856-.48875767 2.80910399-.48903535zm-.65612086 2.99853152c-.55228475 0-1 .44771525-1 1v10c0 .5522847.44771525 1 1 1h3c.5522847 0 1-.4477153 1-1v-10c0-.55228475-.4477153-1-1-1zm7 7c-.5522847 0-1 .4477153-1 1v3c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-3c0-.5522847-.4477153-1-1-1zm0-7c-.5522847 0-1 .44771525-1 1v3c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-3c0-.55228475-.4477153-1-1-1z" fill-rule="evenodd"/>
</SVG>

icons.categoryIcon =
<SVG className="components-coblocks-logo-icon components-coblocks-logo-icon--blue components-panel__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
	<Path d="m7.65612086 3.00146848 8.60095684-.00146814c1.6268055-.00027769 2.2175432.16938914 2.8138163.48807555.5962732.3186864 1.0652814.78641505 1.3862243 1.38244235.3209428.59602729.4931785 1.18725228.5010418 2.81773904l.0415737 8.62042012c.0078633 1.6304868-.1586695 2.2217696-.4738629 2.8179055-.3151934.5961358-.7796894 1.0640238-1.3728878 1.3829133-.5931983.3188894-1.1822985.4887576-2.809104.4890353l-8.60095683.0014682c-1.62680543.0002776-2.21754313-.1693892-2.81381629-.4880756-.59627317-.3186864-1.06528137-.786415-1.38622424-1.3824423-.32094288-.5960273-.49317854-1.1872523-.50104188-2.8177391l-.04157365-8.6204201c-.00786334-1.63048677.15866944-2.22176958.47386289-2.81790546.31519344-.59613588.77968944-1.06402387 1.37288777-1.38291331.59319834-.31888944 1.18229856-.48875767 2.80910399-.48903535zm-.65612086 2.99853152c-.55228475 0-1 .44771525-1 1v10c0 .5522847.44771525 1 1 1h3c.5522847 0 1-.4477153 1-1v-10c0-.55228475-.4477153-1-1-1zm7 7c-.5522847 0-1 .4477153-1 1v3c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-3c0-.5522847-.4477153-1-1-1zm0-7c-.5522847 0-1 .44771525-1 1v3c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-3c0-.55228475-.4477153-1-1-1z" fill-rule="evenodd"/>
</SVG>

icons.sidebarMoreMenuIcon =
<SVG viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><Path d="m5.88996491 1.48588643 8.13794159-.00138911c1.5392296-.00026274 2.0981661.16027042 2.6623401.46180098s1.0079341.74407997 1.3115996 1.30802133c.3036656.56394136.4666293 1.12333893.4740693 2.66605169l.0393356 8.15635708c.0074401 1.5427127-.1501278 2.102165-.4483534 2.6662091s-.7377164 1.0067443-1.2989811 1.308467c-.5612647.3017226-1.1186519.4624463-2.6578815.4627091l-8.13794156.0013891c-1.53922962.0002627-2.09816613-.1602704-2.66234013-.461801-.56417399-.3015306-1.00793407-.74408-1.31159963-1.3080213-.30366556-.5639414-.46662926-1.123339-.47406929-2.6660517l-.03933561-8.15635707c-.00744003-1.54271277.15012779-2.10216506.44835342-2.66620915.29822564-.5640441.73771642-1.00674428 1.29898111-1.30846695.56126469-.30172266 1.11865188-.46244637 2.6578815-.4627091zm-.62079991 2.83711157c-.5225536 0-.946167.4236134-.946167.946167v9.46167c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-9.46167c0-.5225536-.4236134-.946167-.946167-.946167zm6.623169 6.623169c-.5225536 0-.946167.4236134-.946167.946167v2.838501c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-2.838501c0-.5225536-.4236134-.946167-.946167-.946167zm0-6.623169c-.5225536 0-.946167.4236134-.946167.946167v2.838501c0 .5225536.4236134.946167.946167.946167h2.838501c.5225536 0 .946167-.4236134.946167-.946167v-2.838501c0-.5225536-.4236134-.946167-.946167-.946167z" fill-rule="evenodd"/></SVG>

icons.modalIcon =
<SVG height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg">
	<Path d="m6.46683453.00203955 11.94577347-.00203908c2.2594519-.00038567 3.079921.2352627 3.9080781.67788271.8281572.44262 1.4795575 1.09224312 1.9253115 1.92005881s.6849702 1.64896151.6958915 3.91352645l.0577412 11.97280576c.0109213 2.2645649-.2203743 3.085791-.6581429 3.9137575-.4377687.8279666-1.082902 1.477811-1.9067886 1.920713s-1.6420813.6788301-3.9015333.6792157l-11.94577345.0020391c-2.25945199.0003857-3.07992102-.2352627-3.90807819-.6778827-.82815718-.44262-1.47955745-1.0922431-1.92531145-1.9200588s-.68497019-1.6489615-.6958915-3.9135264l-.05774118-11.97280577c-.0109213-2.26456495.22037424-3.08579108.6581429-3.91375758.43776867-.8279665 1.08290201-1.47781093 1.90678858-1.92071294.82388658-.442902 1.64208133-.67883008 3.90153332-.67921576zm-1.07794564 3.98245745c-.76706215 0-1.38888889.62182674-1.38888889 1.38888889v14.23772521c0 .7670622.62182674 1.3888889 1.38888889 1.3888889h4.33333333c.76706218 0 1.38888888-.6218267 1.38888888-1.3888889v-14.23772521c0-.76706215-.6218267-1.38888889-1.38888888-1.38888889zm10.00000001 9.9043919c-.7670622 0-1.3888889.6218267-1.3888889 1.3888889v4.3333333c0 .7670622.6218267 1.3888889 1.3888889 1.3888889h4.2222222c.7670622 0 1.3888889-.6218267 1.3888889-1.3888889v-4.3333333c0-.7670622-.6218267-1.3888889-1.3888889-1.3888889zm0-9.9043919c-.7670622 0-1.3888889.62182674-1.3888889 1.38888889v4.34883633c0 .76706218.6218267 1.38888888 1.3888889 1.38888888h4.2222222c.7670622 0 1.3888889-.6218267 1.3888889-1.38888888v-4.34883633c0-.76706215-.6218267-1.38888889-1.3888889-1.38888889z" fill-rule="evenodd"/>
</SVG>

export default icons;